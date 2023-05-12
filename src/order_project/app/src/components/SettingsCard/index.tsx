import { NavigationProp, useNavigation } from "@react-navigation/native"
import { PencilSquare } from "../Icons/PencilSquare"
import { Trash } from "../Icons/Trash"
import { Text } from "../Text"
import { Container, IconTouch, Img, Row, RowReverse, Spacing } from "./styles"
import {Image} from "react-native"

interface SettingsCardProps {
    imagePath?: string,
    icon?: string,
    name: string,
}

export default (props: SettingsCardProps) => {

    const navigation = useNavigation<NavigationProp>();

    return (
        <Container>
            <Row>
                {props.imagePath?
                        <Img
                            source={{
                                uri: `http://192.168.0.145:3001/uploads/${props.imagePath}`
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
            </Row>
            <RowReverse>
                <IconTouch onPress={()=> navigation.navigate("CategorySettings", {category: props})}>
                    <PencilSquare />
                </IconTouch>                
                <IconTouch>
                    <Trash />
                </IconTouch>
            </RowReverse>
        </Container>
    )
}