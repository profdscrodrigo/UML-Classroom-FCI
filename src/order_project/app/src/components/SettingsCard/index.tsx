import { NavigationProp, useNavigation } from "@react-navigation/native"
import { PencilSquare } from "../Icons/PencilSquare"
import { Trash } from "../Icons/Trash"
import { Text } from "../Text"
import { Container, IconTouch, Img, Row, RowReverse, Spacing } from "./styles"
import { Image } from "react-native"
import { useState } from "react"
import NoticeModal from "../NoticeModal"
import { CloseCircle } from "../Icons/CloseCircle"
import { CheckCircle } from "../Icons/CheckCircle"
import { api } from "../../utils/api"

interface SettingsCardProps {
    imagePath?: string,
    icon?: string,
    name: string,
    _id: string,
    onUpdate: ()=>void,
}

interface Notice{
    text: string;
    type: "success" | "error";
}

export default (props: SettingsCardProps) => {

    const navigation = useNavigation<NavigationProp>();
    const [notice, setNotice] = useState<Notice>({text: "", type: "error"});
    const [isNoticeVisible, setIsNoticeVisible] = useState<boolean>(false);

    const deleteItem = async () =>{
        try{
            if(props?.imagePath){
                const results = await api.delete("/products/"+props?._id);                
            }else{
                const results = await api.delete("/categories/"+props?._id);
            }
            
            setNotice({text: (props?.imagePath ? "Products" : "Categoria") + " foi removida com sucesso!", type: "success"});
            setIsNoticeVisible(true);
            props.onUpdate();
        }catch(e){
            console.log(e)
            setNotice({text: "Um erro ocorreu! Tente novamente.", type: "error"})
            setIsNoticeVisible(true);
        }
    }

    return (
        <Container>
            <Row>
                {props.imagePath?
                        <Img
                            source={{
                                uri: `https://sparkling-tank-top-worm.cyclic.app/uploads/${props.imagePath}`
                            }}
                        />
                    :
                    <Spacing right={12}>
                        <Text size={35}>
                           {props.icon}
                        </Text>
                    </Spacing>
                }
                <Text weight="600" size={20} >{props.name}</Text>

              <RowReverse>
                {!props?.imagePath &&
                    <IconTouch onPress={()=>navigation.navigate("CategorySettings", { category: props })} >
                        <PencilSquare />
                    </IconTouch>
                }
                <IconTouch onPress={deleteItem} >
                    <Trash />
                </IconTouch>
              </RowReverse>
            </Row>
            <NoticeModal
                visible={isNoticeVisible}
                onClose={() =>{
                    setIsNoticeVisible(false);
                }}
                text={notice?.text}
                Icon={()=> notice?.type == "error"? <CloseCircle /> : <CheckCircle /> }
            />
        </Container>
    )
}
