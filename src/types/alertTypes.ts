import { View } from "react-native";
import Toast from 'react-native-toast-message';
import { CheckCircle, WarningCircle, XCircle } from 'phosphor-react-native';
import { ComponentType } from 'react';

export type AlertType = 'success' | 'error' | 'warning';

export interface AlertProps {
    type: AlertType;
    text1: string;
    text2: string;

}

export const alertStyles: Record<AlertType, { bg: string; text1: string, text2: string }> = {
    success: { bg: '#29292E', text1: '#00B37E', text2: '#00B37E' },
    error: { bg: '#29292E', text1: '#AA2834', text2: '#AA2834' },
    warning: { bg: '#29292E', text1: '#FF6400', text2: '#FF6400' },

};

export const alertIcons = {
    success: CheckCircle,
    error: XCircle,
    warning: WarningCircle,
};



