import {useState} from 'react';
import { Container, Content, Row, Spacing, } from './styles';
import Logo from '../../components/Logo';
import { Text } from '../../components/Text';
import Input from '../../components/Input';
import { Button } from '../../components/Button';
import { TouchableOpacity } from 'react-native';
import { InputModal } from '../../components/InputModal';
import { api } from '../../utils/api';
import NoticeModal from '../../components/NoticeModal';
import { CheckCircle } from '../../components/Icons/CheckCircle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CloseCircle } from '../../components/Icons/CloseCircle';

interface Notice{
    text: string;
    type: "success" | "error";
}

export default ({navigation}) => {
    
    const [code, setCode] = useState<string>("");
    const [isSignInVisible, setIsSignInVisible] = useState<boolean>(false);
    const [isNoticeVisible, setIsNoticeVisible] = useState<boolean>(false);
    const [notice, setNotice] = useState<Notice | null>()

    const createRestaurant = async (name: string) => {
        try{
            const results = await api.post("/restaurants", {name});
            setCode(results.data.code);
            setIsSignInVisible(false);
            setNotice({text: "Seu restaurante foi salvo!", type: "success"});
            setIsNoticeVisible(true);
        }catch(e){
            console.log(e)
            setNotice({text: "Um erro ocorreu! Tente novamente.", type: "error"})
            setIsNoticeVisible(true);
        }
    }

    const onLogIn = async () => {
        try{
            await AsyncStorage.setItem('@restaurant_code', code);
            navigation.navigate("Main", {code});
        }catch(e){
            console.log(e);
        }
    }

    return (
        <Container>
            <Content>
                <Spacing bottom={24} >
                    <Logo size={32} />
                </Spacing>
                <Spacing bottom={16} >
                    <Text size={24} weight='600' color="#666" > Login </Text>
                </Spacing>
                <Spacing bottom={12}>
                    <Text color="#666" >
                        Para gerenciar os pedidos é necessário realizar o login utilizando o código do restaurante
                    </Text>
                </Spacing>
                <Spacing bottom={12}>
                    <Row>
                        <Input value={code} onChangeText={setCode} placeholder='Código' />
                    </Row>
                </Spacing>
                <Spacing bottom={8}>
                    <Row>
                        <Button onPress={onLogIn}>Entrar</Button>
                    </Row>
                </Spacing>
                <TouchableOpacity onPress={()=>{setIsSignInVisible(true)}}>
                    <Text weight='600' color="#666">
                        Cadastre-se aqui
                    </Text>
                </TouchableOpacity>
            </Content> 
            <InputModal
                visible={isSignInVisible}
                onClose={() => setIsSignInVisible(false)}
                onSave={createRestaurant}
                text={"Informe o nome do restaurante"}
                placeholder='Nome do restaurante'
            />

            <NoticeModal 
                visible={isNoticeVisible}
                onClose={() => setIsNoticeVisible(false)}
                text={notice?.text}
                Icon={()=> notice?.type == "error"? <CloseCircle /> : <CheckCircle /> }
            />
        </Container>
    )
}