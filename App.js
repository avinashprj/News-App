import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store';
import HomeScreen from './Screens/HomeScreen';
import NewsScreen from './Screens/NewsScreen';
import LoginScreen from './Screens/LoginScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'HomePage' }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Details" component={NewsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
