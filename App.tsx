import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import { CheckCircle, WarningCircle, XCircle } from 'phosphor-react-native';
import { alertIcons, AlertType } from '~/types/alertTypes';

import { store } from './src/store';
import { HomeScreen } from '~/screens/Home';
import { NewTeam } from '~/screens/NewTeam';
import { Players } from '~/screens/Players';
import { Loading } from '~/components/Loading';
import { ToastConfigParams } from 'react-native-toast-message';

import './global.css';
const Stack = createNativeStackNavigator();



export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  const toastConfig = {
    custom: ({ text1, text2, props }: ToastConfigParams<any>) => {
      const type = props.type as AlertType;
      const Icon = alertIcons[props.icon as AlertType];
      return (
        <View style={{
          width: '90%',
          minHeight: 100,
          backgroundColor: props.bg,
          padding: 16,
          borderRadius: 6,
          justifyContent: 'flex-start',
          flexDirection: 'row',
        }}>
          <View className='flex items-start justify-center mr-5 pl-4'>
            {Icon && <Icon color={props.text1} size={32} weight="regular" />}
          </View>
          <View className='flex justify-center items-start'>
            <Text style={{ color: props.text1, fontWeight: 'bold' }}>{text1}</Text>
            <Text style={{ color: props.text2 }}>{text2}</Text>
          </View>
        </View>
      );

    },
  };

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
        <Toast config={toastConfig} />
      </View>
    </Provider>
  );
}