import { TouchableOpacity, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'


type ButtonIconProps = {
    icon?: React.ComponentProps<typeof MaterialIcons>['name']
    cor?: string
    tamanho?: number



}
export function ButtonIcon({ icon, cor, tamanho }: ButtonIconProps) {
    return (
        <TouchableOpacity className=" flex-1   justify-center items-center  ">
            <MaterialIcons
                color={cor}
                name={icon}
                size={tamanho}
            />
        </TouchableOpacity>

    )
}