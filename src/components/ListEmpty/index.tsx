import { Text, View } from "react-native"

type ListEmptyProps = {
    title: string
}
export const ListEmpty = ({ title }: ListEmptyProps) => {
    return (
        <View className="flex-1 items-center  gap-4">
            <Text className="text-GRAY_300  font-REGULAR text-MD">{title}</Text>
        </View>
    )
}