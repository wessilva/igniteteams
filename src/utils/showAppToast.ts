import Toast from 'react-native-toast-message';
import { alertStyles, AlertType } from '~/types/alertTypes';

export function showAppToast(type: AlertType, text1: string, text2: string) {
    const style = alertStyles[type];
    Toast.show({
        type: 'custom',
        text1: text1,
        text2: text2,
        autoHide: true,
        visibilityTime: 2000,
        props: {
            bg: style.bg,
            text1: style.text1,
            text2: style.text2,
            icon: type as AlertType,
        },

    });
}