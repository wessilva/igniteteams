import { Text, TextInput, View } from "react-native"
import { Header } from "~/components/Header"
import { MainButton } from "~/components/MainButton"
import { MainInput } from "~/components/MainInput"
import { UsersThree } from "phosphor-react-native"
import { Highlight } from "~/components/Highlight"


export function NewTeam() {
    return (
        <View className="flex-1 items-center bg-GRAY_600">
            <Header showBackButton />
            <View className="flex-1 mt-10 px-6 gap-5 w-full items-center ">
                <UsersThree size={56} color="#00B37E" weight="regular" />
                <Highlight title="Nova Turma" subtitle="Crie uma nova turma para adiconar pessoas " />
                <MainInput />

                <View className="w-full ">
                    <MainButton title="Criar" onPress={() => { }} variant='primary' />
                </View>
            </View>
        </View>
    )
}