import { TextInput, View } from "react-native"
import { ButtonIcon } from "../ButtonIcon"

type MainInputProps = {
    icon?: string
}

export const MainInput = ({ icon }: MainInputProps) => {

    return (
        <View className="flex flex-row    h-14  bg-GRAY_700 mx-3 rounded-md ">
            <View className="flex w-4/5 h-14 ">

                <TextInput
                    placeholderTextColor={"#323238"}
                    placeholder="Nome da Turma"
                    className="  text-MD pl-4 h-full rounded-md  text-WHITE  " />
            </View>
            <View className=" flex-1 ">
                <ButtonIcon icon="add" cor="#00B37E" tamanho={32} />
            </View>


        </View>
    )
}