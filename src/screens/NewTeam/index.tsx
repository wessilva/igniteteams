import { View } from "react-native"
import { Header } from "~/components/Header"
import { MainButton } from "~/components/MainButton"
import { MainInput } from "~/components/MainInput"
import { UsersThree } from "phosphor-react-native"
import { Highlight } from "~/components/Highlight"

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
        if (teamName.trim())
            dispatch(addTeam(teamName));
        setTeamName('');
        navigation.navigate('home')
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
                    title="Nova Turma"
                    subtitle="Crie uma nova turma para adiconar pessoas " />

                <MainInput
                    inputValue={teamName}
                    inputChange={setTeamName} />

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