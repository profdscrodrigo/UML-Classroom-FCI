import {useState, useEffect, useCallback} from 'react';
import { ButtonContainer, Center, Col, Container, Content, InputContainer, ItemImage, Row, RowCenter, Spacing, TouchRow} from './styles';
import { Text } from '../../components/Text';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import NoticeModal from '../../components/NoticeModal';
import { CloseCircle } from '../../components/Icons/CloseCircle';
import { CheckCircle } from '../../components/Icons/CheckCircle';
import { api } from '../../utils/api';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Category } from '../../types/category';
import {Picker} from '@react-native-picker/picker';
import openImagePicker from '../../utils/openImagePicker';
import { Restaurant } from '../../types/Restaurant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackButton from '../../components/BackButton';

interface Notice{
    text: string;
    type?: "success" | "error";
}

export default ({route}:any) => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [category, setCategory] = useState<string>();
    const [image, setImage] = useState<any>();
    const [categories, setCategories] = useState<Category[]>([]);
    const [restaurant, setRestaurant] = useState<Restaurant>();
    const [notice, setNotice] = useState<Notice>({text: ""});
    const [isNoticeVisible, setIsNoticeVisible] = useState<boolean>(false);

    const {goBack} = useNavigation();

    const params = route?.params;

    const findRestaurant = async (restaurants: Restaurant[], code: string | null) => {
        const index = await restaurants.findIndex((value)=>value.code == code);
        setRestaurant(restaurants[index]);
    }

    useFocusEffect(
        useCallback (()=>{
          Promise.all([
            api.get('/categories'),
            AsyncStorage.getItem('@restaurant_code'),
            api.get('/restaurants'),
          ]).then(([categoriesResponse, code, restaurantsResponse]) => {
            setCategories(categoriesResponse.data);
            findRestaurant(restaurantsResponse.data, code);
          });
          return;
        },[])
    )

    useEffect(()=>{
        if(params?.category){
            setName(params?.product?.name);
        }
    },[params])

    const createProduct = async () =>{
        try{
            let productData = new FormData();
            productData.append('name', name);
            productData.append('price', price);
            productData.append('description', description);
            productData.append('category', category?._id);
            productData.append('restaurant', restaurant?._id);
            
            const imgName = image.uri.substr(image.uri.lastIndexOf('/')+1);
            const imgType = "image/"+imgName.substr(imgName.lastIndexOf('.')+1);
            productData.append('image', {...image, name: imgName, type: imgType}, imgName);

            const results = await api.post("/products", productData, {headers:{'Content-Type': 'multipart/form-data', 'Accept': 'multipart/form-data'}});
            setNotice({text: "O produto foi salvo com sucesso!", type: "success"});
            setIsNoticeVisible(true);
        }catch(e){
            console.log(JSON.stringify(e))
            setNotice({text: "Um erro ocorreu! Tente novamente.", type: "error"})
            setIsNoticeVisible(true);
        }
    }
    
    return(
        <Container>
            <Content>
                <RowCenter>
                    <BackButton />
                    <Col>
                        <Text size={14} opacity={0.9}>{params?.category?"Edite seus":"Cadastro de"}</Text>
                        <Text size={24}>Produtos</Text>
                    </Col>
                </RowCenter>
                <Spacing bottom={24} />
                <Row>
                    <Input value={name} onChangeText={setName} placeholder='Nome' />
                </Row>
                <Spacing bottom={16} />
                <Row>
                    <Input value={price} onChangeText={setPrice} placeholder='Preço' keyboardType='number-pad' />
                </Row>
                <Spacing bottom={16} />
                <InputContainer>
                    <Picker
                        selectedValue={category}
                        onValueChange={(value) => {
                            if(value != "")
                                setCategory(categories[value]) 
                        }}
                    >
                        <Picker.Item key={"PicI"+-1} label="Escolha uma categoria" value="" />
                        {
                            categories?.map((c, i)=>(
                                <Picker.Item key={"PicI"+i} label={c.icon+" "+c.name} value={i+""} />
                            ))
                        }
                    </Picker>
                </InputContainer>
                <Spacing bottom={16} />
                <Row>
                    <Input value={description} onChangeText={setDescription} placeholder='Descrição' variant="multi" />
                </Row>
                <Spacing bottom={16} />
                <TouchRow onPress={()=>Promise.all([openImagePicker()]).then(([val])=>setImage(val) )}>
                    <ItemImage source={{uri: image?.uri}} />                        
                    <Center>
                        <Text size={16} color="#666" >Adicione uma imagem do produto</Text>
                    </Center>
                </TouchRow>
                <Spacing bottom={16} />

            </Content> 
            <ButtonContainer>
                <Row>
                    <Button onPress={createProduct} disabled={!name || !price || !description || !category || !image } >Salvar</Button>
                </Row>
                <Spacing bottom={16} />
            </ButtonContainer>
            <NoticeModal 
                visible={isNoticeVisible}
                onClose={() =>{ 
                    setIsNoticeVisible(false);
                    if(notice?.type == "success"){
                        goBack();
                    }
                }}
                text={notice?.text}
                Icon={()=> notice?.type == "error" ? <CloseCircle /> : <CheckCircle /> }
            />
        </Container>
    )
}