import { Text, TouchableOpacity, View } from "react-native"


type teamselectedProps = {
    countPlayers?: number;
    onPressA: () => void;
    onPressB: () => void;
    selectedTeam: 'A' | 'B' | null;
}
export const TeamSelected = ({ countPlayers, onPressA, onPressB, selectedTeam }: teamselectedProps) => {
    return (
        <View className=" flex-row items-center justify-between  h-14 mx-3 mt-6 mb-5">
            <View className="  flex-row gap-3" >
                <TouchableOpacity
                    onPress={onPressA}
                    className={` items-center justify-center border ${selectedTeam === 'A' ? 'border-GREEN_700' : 'border-transparent'} rounded-md  h-14 w-24`}>
                    <Text
                        className="font-BOLD text-MD text-WHITE  text-center">TIME A</Text>
                </TouchableOpacity >
                <TouchableOpacity
                    onPress={onPressB}
                    className={` items-center justify-center border ${selectedTeam === 'B' ? 'border-GREEN_700' : 'border-transparent'} rounded-md  h-14 w-24`}>
                    <Text className="font-BOLD text-MD  text-WHITE text-center">TIME B</Text>
                </TouchableOpacity >
            </View>

            <Text className="font-BOLD text-MD text-WHITE pr-12">{countPlayers}</Text>

        </View>
    )
}