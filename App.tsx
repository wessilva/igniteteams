import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { store } from './src/store';
import { HomeScreen } from '~/screens/Home';
import { NewTeam } from '~/screens/NewTeam';
import { Players } from '~/screens/Players';
import { Loading } from '~/components/Loading';

import './global.css';
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Provider store={store}>
      <View className="flex-1 bg-slate-600">
        <StatusBar
          style="light"
          backgroundColor="transparent"
          translucent />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="newteam" component={NewTeam} />
            <Stack.Screen name="players" component={Players} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}