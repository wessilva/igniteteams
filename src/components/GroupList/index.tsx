import { FlatList, Text, View } from "react-native"


export const GroupList = () => {
    return (
        <View className=" flex-1  bg-red-600 ">
            <FlatList
                data={['Galera RN', 'Galera React', 'Galera JS', 'Galera TS', 'Galera HTML', 'Galera CSS', 'Galera PHP', 'Galera Java', 'Galera C#', 'Galera C++', 'Galera C', 'Galera Ruby', 'Galera Swift', 'Galera Kotlin', 'Galera Dart', 'Galera Go', 'Galera Rust', 'Galera Elixir', 'Galera Haskell', 'Galera Scala']}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <View className="bg-slate-800 rounded-lg p-4 m-2 ">
                        <Text className="text-white text-lg font-bold">{item}</Text>
                    </View>
                )}

            >

            </FlatList>

        </View>
    )
}