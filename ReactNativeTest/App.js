import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './assets/components/HomePage';
import CoinFlipPage from './assets/components/CoinFlipPage';
import RollDicePage from './assets/components/RollDicePage';
import RandNumPage from './assets/components/RandNumPage';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="CoinFlipPage" component={CoinFlipPage} />
      <Stack.Screen name="RollDicePage" component={RollDicePage} />
      <Stack.Screen name="RandNumPage" component={RandNumPage} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
