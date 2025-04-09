import { SafeAreaView, View } from "react-native";
import { GroupCard } from "~/components/GroupCard";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { MainButton } from "~/components/MainButton";
import { useState } from "react";
import { FlatList } from "react-native";
import { GroupList } from "~/components/GroupList";

export const HomeScreen = () => {
    const [groups, setGroups] = useState<string[]>(['Galera RN', 'Galera React', 'Galera JS', 'Galera TS', 'Galera HTML', 'Galera CSS', 'Galera PHP', 'Galera Java', 'Galera C#', 'Galera C++', 'Galera C', 'Galera Ruby', 'Galera Swift', 'Galera Kotlin', 'Galera Dart', 'Galera Go', 'Galera Rust', 'Galera Elixir', 'Galera Haskell', 'Galera Scala']);

    const addGroup = () => {
        console.log("add group")
    }
    return (
        <SafeAreaView className="flex-1  bg-slate-950" >
            <View className="flex-1  justify-between  ">
                <View className="flex-1 ">
                    <Header />
                    <Highlight title="Turmas" subtitle="Jogue com a galera!" />
                    <GroupList />
                </View>
                <MainButton title="Criar Turma " onPress={addGroup} />
            </View>


        </SafeAreaView>
    );
}