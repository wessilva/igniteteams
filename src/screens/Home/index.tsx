import { SafeAreaView } from "react-native";
import { GroupCard } from "~/components/GroupCard";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { MainButton } from "~/components/MainButton";

export const HomeScreen = () => {


    const addGroup = () => {
        console.log("add group")
    }
    return (
        <SafeAreaView className="flex-1 bg-GRAY_600 ">
            <Header />
            <Highlight title="Turmas" subtitle="Jogue com a galera!" />
            <GroupCard title="Galera do RN" />


            <MainButton title="Criar Turma " onPress={addGroup} />
        </SafeAreaView>
    );
}