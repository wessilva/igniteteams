// Tipos globais do app

export type Team = {
    id: string;
    name: string;
    createdAt: Date;
    members: Player[];
};

export type Player = {
    id: string;
    name: string;
    teamId: string;
};

export type RootStackParamList = {
    home: undefined;
    newteam: undefined;
    players: { group: string };
};

// Adicione outros tipos globais conforme necessário