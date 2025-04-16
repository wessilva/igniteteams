import { Text, TouchableOpacity, View } from "react-native"
import { UsersThree } from "phosphor-react-native"
import { useState } from "react"

type GroupCardProps = {
    title: string;
    onPress: () => void;
}

export const GroupCard = ({ title, onPress }: GroupCardProps) => {

    return (
        <View className="flex-1  mx-6 items-center ">
            <TouchableOpacity onPress={onPress} className=" w-full  p-7  mb-3 flex flex-row  items-center  h-[100px] bg-GRAY_500 rounded-md ">
                <View className="mr-5" >
                    <UsersThree size={32} color="#00B37E" weight="regular" />
                </View>
                <Text className="text-MD font-REGULAR text-GRAY_200">{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
