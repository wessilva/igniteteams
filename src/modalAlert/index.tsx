import { Text, TouchableOpacity, View, Modal } from "react-native"

type ModalAlertProps = {
    visible?: boolean
    onClose?: () => void
}

export const ModalAlert = ({ visible, onClose }: ModalAlertProps) => {
    return (
        <Modal
            visible={!!visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View className="flex-1 items-center justify-center bg-black/50">
                <View className=" flex items-center justify-center w-4/5 h-72 bg-GRAY_700 rounded-lg p-4">
                    <Text className="text-white mb-4 text-center">Selecione um time para adicionar o participante</Text>
                    <TouchableOpacity
                        onPress={onClose}
                        className="mt-2 px-4 py-2 bg-GREEN_700 rounded">
                        <Text className="text-white">Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}