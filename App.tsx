import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { HomeScreen } from '~/screens/Home';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '~/components/Loading';

import './global.css';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <View className="flex-1 ">

      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent />
      {fontsLoaded ? <HomeScreen /> : <Loading />}
    </View>
  );
}