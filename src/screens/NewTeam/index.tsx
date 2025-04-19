import { View } from "react-native"
import { Header } from "~/components/Header"
import { MainButton } from "~/components/MainButton"
import { MainInput } from "~/components/MainInput"
import { Highlight } from "~/components/Highlight"
import { showAppToast } from '~/utils/showAppToast';

import { UsersThree } from "phosphor-react-native"
import Toast from 'react-native-toast-message'
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"


import { useDispatch } from "react-redux"
import { useState } from "react"
import { addTeam } from "~/features/teamSlice"
import type { RootStackParamList } from "~/types/types"

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function NewTeam() {
    const [teamName, setTeamName] = useState('')
    const dispatch = useDispatch()
    const navigation = useNavigation<NavigationProps>();

    const handleCreateTeam = () => {
        if (!teamName.trim()) {
            showAppToast('error', 'Erro!', 'Adicione um nome para o time.')
            return;
        }
        dispatch(addTeam(teamName));
        setTeamName('');
        navigation.navigate('home')
        showAppToast('success', 'Sucesso!', 'Time criado com sucesso.')


    }

    return (
        <View
            className="flex-1 items-center bg-GRAY_600">

            <Header
                showBackButton />

            <View className="flex-1 mt-10 px-6 gap-5 w-full items-center ">

                <UsersThree
                    size={56}
                    color="#00B37E"
                    weight="regular" />

                <Highlight
                    title="Novo Grupo"
                    subtitle="Crie um grupo para adicionar pessoas " />

                <MainInput
                    inputValue={teamName}
                    inputChange={setTeamName}
                    placeholder="Nome do grupo" />

                <View className="w-full ">

                    <MainButton
                        title="Criar"
                        onPress={handleCreateTeam}
                        variant='primary' />

                </View>
            </View>
        </View>
    )
}