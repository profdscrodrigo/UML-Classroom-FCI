import { NavigationProp, useNavigation } from "@react-navigation/native"
import { TouchableOpacity } from "react-native";
import { LeftArrow } from "../Icons/LeftArrow";

export default () => {
    const navigation = useNavigation<NavigationProp>();

    return(
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{paddingRight:12}}>
            <LeftArrow />
        </TouchableOpacity>
    )
}