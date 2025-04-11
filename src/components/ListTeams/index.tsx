import { FlatList } from "react-native"
import { PlayerCard } from "../PlayerCard"


export const ListTeams = () => {
    return (
        <FlatList className="flex-1 mb-3"
            showsVerticalScrollIndicator={false}
            data={[{ id: "1", name: "Lucas" },

            ]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <PlayerCard player={item.name} />
            )}
        ></FlatList>
    )
}