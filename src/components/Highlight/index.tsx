import { Text, View } from "react-native"


type HighlightProps = {
    title: string;
    subtitle: string;
}

export const Highlight = ({ title, subtitle }: HighlightProps) => {
    return (
        <View className=" flex  items-center w-full mb-8">
            <Text
                className="text-center text-XL font-BOLD text-WHITE">{title}
            </Text>
            <Text
                className="text-center text-MD font-REGULAR text-GRAY_300">{subtitle}
            </Text>
        </View>
    )
}