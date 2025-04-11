import { View } from "react-native";
import { ButtonIcon } from "~/components/ButtonIcon";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { ListTeams } from "~/components/ListTeams";
import { MainButton } from "~/components/MainButton";
import { MainInput } from "~/components/MainInput";
import { PlayerCard } from "~/components/PlayerCard";
import { TeamSelected } from "~/components/TeamSelected";

export function Players() {

    const onPress = () => {
        console.log("oi")
    }
    return (
        <View className="flex-1 bg-GRAY_600">
            <Header showBackButton />
            <Highlight title="Nome da turma " subtitle="Selecione a pessoa que deseja adicionar ao time" />
            <MainInput />
            <TeamSelected />
            <ListTeams />
            <MainButton title="Remover Turma " variant="secondary" onPress={onPress} />
        </View>
    )
}