import { createStackNavigator } from '@react-navigation/stack';
import CategorySettings from '../../screens/CategorySettings';

import { Main } from '../../screens/Main';
import ProductSettings from '../../screens/ProductSettings';
import Settings from '../../screens/Settings';
import { PropsNavigationStack } from './Models';

const { Navigator, Screen } = createStackNavigator<PropsNavigationStack>();

export default function() {
  return (
    <Navigator

      screenOptions={{ headerShown: false }}
    >
      <Screen name="Main" component={Main}/>
          <Screen name="Settings" component={Settings}/>
          <Screen name="CategorySettings" component={CategorySettings}/>
          <Screen name="ProductSettings" component={ProductSettings}/>
    </Navigator>
  );
}

