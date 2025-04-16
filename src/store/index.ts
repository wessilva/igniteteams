import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import teamSlice from '~/features/teamSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage, // Use AsyncStorage for React Native
};

const rootReducer = combineReducers({
    team: teamSlice, // Remova qualquer referência a 'players'
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const clearPersistedStore = async () => {
    try {
        await persistor.purge();
        console.log('Dados persistidos foram limpos com sucesso!');
    } catch (error) {
        console.error('Erro ao limpar os dados persistidos:', error);
    }
};

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;