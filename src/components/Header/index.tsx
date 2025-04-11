import { Image, TouchableOpacity, View } from "react-native"
import { CaretLeft } from "phosphor-react-native"
import { useNavigation } from "@react-navigation/native"


type Props = {
    showBackButton?: boolean
}

export const Header = ({ showBackButton = false }: Props) => {

    const navgation = useNavigation()

    const backPage = () => {
        navgation.goBack()
    }


    return (
        <View className="flex-row w-full mt-9 justify-center items-center p-6 ">
            {
                showBackButton &&
                <TouchableOpacity onPress={backPage} className="flex-1">
                    <CaretLeft size={32} color="#00B37E" />
                </TouchableOpacity>
            }
            <Image source={require('../../assets/logo.png')} />
        </View>
    )

}