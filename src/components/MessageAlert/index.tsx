import Toast from 'react-native-toast-message';
import { AlertType } from '../../types/alertTypes';
import { Text, View } from 'react-native';
import { ToastConfig } from 'react-native-toast-message/lib/src/types';
import React from 'react';
import { AlertProps, alertStyles } from '~/types/alertTypes';

export function MessageAlert({ type, message }: AlertProps) {
    const style = alertStyles[type];
    return (
        <View className={`p-4 rounded-md mb-2 ${style.bg}`}>
            <Text className={`font-bold ${style.text}`}>{message}</Text>
        </View>
    );
}


