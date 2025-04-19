import { FlatList, View } from "react-native"
import { GroupCard } from "../GroupCard"
import { ListEmpty } from "../ListEmpty"


import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Team } from "~/features/teamSlice";
import { RootStackParamList } from "~/types/types";



type NavigationProps = NativeStackNavigationProp<RootStackParamList>;



type GroupListProps = {
    groups: Team[]
}
export const GroupList = ({ groups }: GroupListProps) => {

    const navigation = useNavigation<NavigationProps>();

    const editGroup = (team: Team) => {
        navigation.navigate('players', { group: team.id });
    }

    const validGroups = Array.isArray(groups) ? groups : [];

    return (

        <View className="flex-1">
            <FlatList
                data={validGroups}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <GroupCard onPress={() => editGroup(item)} title={item.name} />
                )}
                ListEmptyComponent={<ListEmpty title="Cadastre a primeira turma" />}
            />
        </View>


    )
}