import { SafeAreaView, View } from "react-native";
import { GroupCard } from "~/components/GroupCard";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { MainButton } from "~/components/MainButton";
import { useState } from "react";
import { FlatList } from "react-native";
import { GroupList } from "~/components/GroupList";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Defina o tipo das rotas da sua aplicação
type RootStackParamList = {
    home: undefined;
    "new-team": undefined;
    players: { group: string };
    // Adicione outras rotas conforme necessário
};

// Defina o tipo de navegação
type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export const HomeScreen = () => {
    const [groups, setGroups] = useState<string[]>([]);

    const navigation = useNavigation<NavigationProps>();
    const route = useRoute();

    const addGroup = () => {
        navigation.navigate('new-team');
    }

    return (
        <SafeAreaView className="flex-1  bg-slate-950" >
            <View className="flex-1  justify-between  ">
                <View className="flex-1 ">
                    <Header />
                    <Highlight title="Turmas" subtitle="Jogue com a galera!" />
                    <GroupList groups={groups} />
                    <MainButton title="Criar Turma " onPress={addGroup} />
                </View>
            </View>
        </SafeAreaView>
    );
}