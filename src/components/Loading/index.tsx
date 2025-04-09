import { ActivityIndicator, View } from "react-native"


export const Loading = () => {
    return (
        <View className="flex-1 bg-GRAY_600 justify-center items-center">
            <ActivityIndicator className="color-GREEN_700" />
        </View>
    )
}