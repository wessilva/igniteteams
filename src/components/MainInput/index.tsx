import { TextInput, View } from "react-native"
import { ButtonIcon } from "../ButtonIcon"

type MainInputProps = {
    showButton?: boolean
    inputValue?: string
    inputValues?: string
    inputChange?: (text: string) => void

    cor?: string
    tamanho?: number
    onPress?: () => void
    name?: string
}

export const MainInput = ({ showButton = false, inputValue, inputChange, onPress }: MainInputProps) => {

    return (
        <View className="flex flex-row    h-14  bg-GRAY_700 mx-3 rounded-md ">
            <View className="flex-1  w-4/5 h-14 ">
                <TextInput
                    value={inputValue}
                    onChangeText={inputChange}
                    placeholderTextColor={"#323238"}
                    placeholder="Nome da Turma"
                    className="  text-MD pl-4 h-full rounded-md  text-WHITE  " />
            </View>
            {showButton &&
                <View className=" flex pr-8 ">
                    <ButtonIcon
                        icon="add"
                        cor="#00B37E"
                        tamanho={32}
                        onPress={onPress} />
                </View>}
        </View>
    )
}