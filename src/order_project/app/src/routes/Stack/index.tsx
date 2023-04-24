import { createStackNavigator } from '@react-navigation/stack';

import { Main } from '../../screens/Main';
import { PropsNavigationStack } from './Models';

const { Navigator, Screen } = createStackNavigator<PropsNavigationStack>();

export default function() {
  return (
    <Navigator

      screenOptions={{ headerShown: false }}
    >
      <Screen name="Main" component={Main}/>
    </Navigator>
  );
}

