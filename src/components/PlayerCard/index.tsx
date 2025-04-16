import { Text, View } from "react-native"
import { User } from "phosphor-react-native"
import { ButtonIcon } from "../ButtonIcon"

type Props = {
    players: string
    onPress?: () => void
}
export const PlayerCard = ({ players, onPress }: Props) => {
    return (
        <View className=" flex-1 flex-row items-center justify-between h-16 mx-3 mt-3 bg-GRAY_500 rounded-md p-2">
            <View className="flex-row w-4/5 items-center pl-1 gap-3">
                <User
                    size={24}
                    color="#7C7C8A"
                    weight="fill" />
                <Text className="font-REGULAR text-MD text-GRAY_300">{players}</Text>
            </View>
            <ButtonIcon
                icon="close"
                cor="#ad2323"
                tamanho={26}
                onPress={onPress} />
        </View>

    )
}