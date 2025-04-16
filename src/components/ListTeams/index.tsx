import { FlatList } from "react-native"
import { PlayerCard } from "../PlayerCard"

type ListTeamsProps = {
    players: { id: string; name: string }[];
    onRemovePlayer: (player: string) => void;
}

export const ListTeams = ({ players, onRemovePlayer }: ListTeamsProps) => {

    return (
        <FlatList className="flex-1 mb-3"
            showsVerticalScrollIndicator={false}
            data={players}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <PlayerCard
                    players={item.name}
                    onPress={() => onRemovePlayer(item.id)} />
            )}
        ></FlatList>
    )
}