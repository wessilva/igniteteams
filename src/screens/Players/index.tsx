import { View, Alert } from "react-native";
import { Header } from "~/components/Header";
import { Highlight } from "~/components/Highlight";
import { ListTeams } from "~/components/ListTeams";
import { MainButton } from "~/components/MainButton";
import { MainInput } from "~/components/MainInput";
import { TeamSelected } from "~/components/TeamSelected";
import { ModalAlert } from "~/modalAlert";

import Toast from 'react-native-toast-message'

import { RootState } from "~/store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { removeTeam, addPlayerToTeam, removePlayerFromTeam } from "~/features/teamSlice";

import { useNavigation, useRoute } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import type { RootStackParamList } from "~/types/types"
import { showAppToast } from "~/utils/showAppToast";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function Players() {
    const [newPlayer, setNewPlayer] = useState('')
    const [selectedTeam, setSelectedTeam] = useState<'A' | 'B' | null>(null)
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()
    const teams = useSelector((state: RootState) => state.team.teams)

    const navigation = useNavigation<NavigationProps>();
    const route = useRoute();
    const { group } = route.params as { group: string };

    const currentTeam = teams.find((team) => team.id === group);
    const playerList = selectedTeam === "A" ? currentTeam?.participantesA || [] : selectedTeam === 'B' ? currentTeam?.participantesB || [] : []

    const handleTeamSelected = (team: 'A' | 'B') => {
        setSelectedTeam(team)
        console.log('selected team:', team);
    }
    const addPlayer = () => {
        if (!newPlayer.trim()) {

            showAppToast('error', 'Erro!', 'Adicione um participante!')
            return;
        }
        if (!selectedTeam) {

            showAppToast('warning', 'Atenção!', 'Selecione um time para adicionar o jogador.')
            return;
        }
        dispatch(addPlayerToTeam({ teamName: group, playerName: newPlayer, teamType: selectedTeam }))
        console.log(newPlayer, selectedTeam);
        setNewPlayer('')

    }
    const handleRemoveTeams = async () => {
        if (currentTeam) {
            dispatch(removeTeam(currentTeam.id));
            navigation.navigate('home')

            showAppToast('success', 'Removido!', 'Turma removida com sucesso.')
        }
    };
    const removePlayer = (playerId: string) => {
        if (!selectedTeam) return;
        dispatch(removePlayerFromTeam({ teamName: group, playerId, teamType: selectedTeam }));
        Toast.show({
            type: 'success', // Tipo pré-definido
            text1: 'Sucesso!',
            text2: 'Participante removido com sucesso!.',
            visibilityTime: 3000, // 3 segundos
            autoHide: true, // Fecha automaticamente
        });
        showAppToast('success', 'Removido!', 'Participante removido com sucesso.')
    };

    return (
        <View className="flex-1 bg-GRAY_600">
            <Header showBackButton />
            <Highlight title="Nome da Grupo " subtitle="Selecione o jogador que deseja adicionar ao time" />
            <MainInput placeholder="Adicione um jogador" showButton inputValue={newPlayer} inputChange={setNewPlayer} onPress={addPlayer} />
            <TeamSelected onPressA={() => handleTeamSelected("A")} onPressB={() => handleTeamSelected("B")} selectedTeam={selectedTeam} countPlayers={playerList?.length || 0} />
            <ModalAlert visible={showModal} onClose={() => setShowModal(false)} />
            <ListTeams players={playerList} onRemovePlayer={(playerId) => removePlayer(playerId)} />
            <MainButton title="Remover grupo " variant="secondary" onPress={handleRemoveTeams} />
        </View>
    )
}