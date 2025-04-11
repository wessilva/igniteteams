import { Text, View } from "react-native"

export const TeamSelected = () => {
    return (
        <View className=" flex-row items-center justify-between  h-14 mx-3 mt-6 mb-5">
            <View className="  flex-row gap-3" >
                <View className=" items-center justify-center border border-GREEN_500 rounded-md  h-14 w-24">
                    <Text className="font-BOLD text-MD text-WHITE  text-center">TIME A</Text>
                </View>
                <View className=" items-center justify-center border border-GREEN_500 rounded-md  h-14 w-24">
                    <Text className="font-BOLD text-MD  text-WHITE text-center">TIME B</Text>
                </View>
            </View>

            <Text className="font-BOLD text-MD text-WHITE">2</Text>

        </View>
    )
}