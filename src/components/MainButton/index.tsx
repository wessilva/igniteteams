import { Text, TouchableOpacity, View } from "react-native"


type MainButtonProps = {
    title: string;
    variant?: 'primary' | 'secondary';
    onPress: () => void;
}

export const MainButton = ({ title, variant = 'primary', onPress }: MainButtonProps) => {
    return (
        <View className="flex mb-20  mx-3  ">
            <TouchableOpacity onPress={onPress}
                className={`${variant === 'primary' ? 'bg-GREEN_700' : 'bg-RED_DARK'} flex-1 justify-center items-center min-h-[56px] max-h-[56px] w-full  rounded-md`}>
                <Text className="text-WHITE text-MD font-BOLD">{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

