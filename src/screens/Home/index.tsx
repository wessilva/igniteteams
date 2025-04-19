import { SafeAreaView, View } from 'react-native';

import { Header } from '~/components/Header';
import { Highlight } from '~/components/Highlight';
import { MainButton } from '~/components/MainButton';
import { GroupList } from '~/components/GroupList';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useSelector } from 'react-redux';
import { RootState } from '~/store';

import type { RootStackParamList } from '~/types/types';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export const HomeScreen = () => {
    const teams = useSelector((state: RootState) => state.team.teams);

    const navigation = useNavigation<NavigationProps>();

    const handleAddGroup = () => {
        navigation.navigate('newteam');
    }

    return (
        <SafeAreaView className="flex-1  bg-slate-950" >
            <View className="flex-1  justify-between  ">
                <View className="flex-1 ">
                    <Header />
                    <Highlight
                        title="Grupos"
                        subtitle="Jogue com a galera!" />
                    <GroupList
                        groups={teams} />
                    <MainButton
                        title="Criar Grupos "
                        onPress={handleAddGroup} />
                </View>
            </View>
        </SafeAreaView>
    );
}