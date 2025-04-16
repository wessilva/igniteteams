import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
export interface PlayersA {
    id: string;
    name: string;
}
export interface PlayersB {
    id: string;
    name: string;
}

export interface Team {
    id: string;
    name: string;
    participantesA: PlayersA[];
    participantesB: PlayersB[];
}

interface TeamState {
    teams: Team[];
    loading: boolean;
}

const initialState: TeamState = {
    teams: [],
    loading: false,
};

export const fetchTeams = createAsyncThunk('team/fetchTeams', async () => {
    const response = await fetch('https://api.example.com/teams');
    return (await response.json()) as string[];
});

const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        addTeam: (state, action: PayloadAction<string>) => {
            const generateId = () => Math.random().toString(36).substr(2, 4);
            state.teams.push({ id: generateId(), name: action.payload, participantesA: [], participantesB: [] });
        },
        removeTeam: (state, action: PayloadAction<string>) => {
            state.teams = state.teams.filter((team) => team.id !== action.payload);
        },
        addPlayerToTeam: (state, action: PayloadAction<{ teamName: string; playerName: string, teamType: "A" | "B" }>) => {
            const team = state.teams.find(team => team.id === action.payload.teamName);
            const generateId = () => Math.random().toString(36).substr(2, 4);
            if (team) {
                if (action.payload.teamType === "A") {
                    team.participantesA.push({ id: generateId(), name: action.payload.playerName });
                } else if (action.payload.teamType === "B") {
                    team.participantesB.push({ id: generateId(), name: action.payload.playerName });
                }
            }
        },
        removePlayerFromTeam: (state, action: PayloadAction<{ teamName: string; playerId: string, teamType: "A" | "B" }>) => {
            const team = state.teams.find(team => team.id === action.payload.teamName);
            if (team) {
                if (action.payload.teamType === "A") {
                    team.participantesA = team.participantesA.filter(player => player.id !== action.payload.playerId);
                } else if (action.payload.teamType === "B") {
                    team.participantesB = team.participantesB.filter(player => player.id !== action.payload.playerId);
                }
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeams.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTeams.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(fetchTeams.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const selectTeams = (state: { team: TeamState }) => state.team.teams;
export const selectTeamLoading = (state: { team: TeamState }) => state.team.loading;

export const { removeTeam, addTeam, addPlayerToTeam, removePlayerFromTeam } = teamSlice.actions;
export default teamSlice.reducer;