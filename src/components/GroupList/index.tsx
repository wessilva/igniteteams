import { FlatList, View } from "react-native"
import { GroupCard } from "../GroupCard"
import { ListEmpty } from "../ListEmpty"


type GroupListProps = {
    groups: string[]
}
export const GroupList = ({ groups }: GroupListProps) => {
    return (

        <View className="flex-1">
            <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <GroupCard title={item} />
                )}
                ListEmptyComponent={<ListEmpty title="Que tal cadastrar a primeira turma ?" />}
            />
        </View>


    )
}