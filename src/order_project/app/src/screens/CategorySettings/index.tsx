import {useState, useEffect} from 'react';
import { Col, Container, Content, Row, RowCenter, Spacing, TouchRow,} from './styles';
import { Text } from '../../components/Text';
import Input from '../../components/Input';
import EmojiPicker from 'rn-emoji-keyboard';
import { EmojiType } from 'rn-emoji-keyboard/lib/typescript/src/types';
import { Button } from '../../components/Button';
import NoticeModal from '../../components/NoticeModal';
import { CloseCircle } from '../../components/Icons/CloseCircle';
import { CheckCircle } from '../../components/Icons/CheckCircle';
import { api } from '../../utils/api';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';

interface Notice{
    text: string;
    type: "success" | "error";
}

export default ({route}:any) => {
    const [name, setName] = useState<string>("");
    const [icon, setIcon] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [notice, setNotice] = useState<Notice>({text: "", type: "error"});
    const [isNoticeVisible, setIsNoticeVisible] = useState<boolean>(false);

    const {goBack} = useNavigation();

    const params = route?.params;

    useEffect(()=>{
        if(params?.category){
            setName(params?.category?.name);
            setIcon(params?.category?.icon);
        }
    },[params])

    const createCategory = async () =>{
        try{
            const results = await api.post("/categories", { name, icon });
            setNotice({text: "A categoria foi salva com sucesso!", type: "success"});
            setIsNoticeVisible(true);
        }catch(e){
            console.log(e)
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
                        <Text size={14} opacity={0.9}>{params?.category ? "Edite suas" : "Cadastro de"}</Text>
                        <Text size={24}>Categorias</Text>
                    </Col>
                </RowCenter>
                <Spacing bottom={24} />
                <Row>
                    <Input value={name} onChangeText={setName} placeholder='Nome' />
                </Row>
                <Spacing bottom={16} />
                <TouchRow onPress={()=>{setIsOpen(true)}}>
                    <Input value={icon} placeholder='Icone' editable={false} />
                </TouchRow>
            </Content>
            <Container />
            <Content>
                <Row>
                    <Button onPress={createCategory} disabled={!name || !icon}>Salvar</Button>
                </Row>
                <Spacing bottom={24} />
            </Content>
            <EmojiPicker onEmojiSelected={({emoji}:EmojiType)=>{setIcon(emoji)}} open={isOpen} onClose={() => setIsOpen(false)} />
            <NoticeModal
                visible={isNoticeVisible}
                onClose={() =>{
                    setIsNoticeVisible(false);
                    if(notice?.type == "success"){
                        goBack();
                    }
                }}
                text={notice?.text}
                Icon={()=> notice?.type == "error"? <CloseCircle /> : <CheckCircle /> }
            />
        </Container>
    )
}
