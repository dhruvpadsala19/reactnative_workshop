import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

interface FabProps {
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  size?: number;
  buttonColor?: string;
  iconColor?: string;
  style?: ViewStyle;
}


export const FAB = ({onPress, icon = 'add', size = 42, buttonColor = 'blue', iconColor = 'white', style = {}}: FabProps ) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.fabContainer, {backgroundColor: buttonColor}, style]}>
            <Ionicons name={icon} size={size} color={iconColor} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fabContainer: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
});