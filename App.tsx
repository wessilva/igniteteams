import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { HomeScreen } from '~/screens/Home';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '~/components/Loading';

import './global.css';
import { NewTeam } from '~/screens/NewTeam';
import { Players } from '~/screens/Players';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <View className="flex-1 bg-slate-600">

      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="new-team" component={NewTeam} />
          <Stack.Screen name="players" component={Players} />
        </Stack.Navigator>
      </NavigationContainer>
      {fontsLoaded ? null : <Loading />}
    </View>
  );
}