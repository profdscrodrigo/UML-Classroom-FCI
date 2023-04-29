import { createStackNavigator } from '@react-navigation/stack';

import { Main } from '../../screens/Main';
import { PropsNavigationStack } from './Models';
import Login from '../../screens/Login';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { Navigator, Screen } = createStackNavigator<PropsNavigationStack>();

export default function() {
  const [code, setCode] = useState<string | null>("");

  const getRestaurantCode = async () =>{
    const temp = await AsyncStorage.getItem('@restaurant_code');
    setCode(temp);
  }

  useEffect(() => {
    getRestaurantCode()
  },[]);
  
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
    >
          <Screen name="Login" component={Login}/>
            <Screen name="Main" component={Main}/>
    </Navigator>
  );
}

