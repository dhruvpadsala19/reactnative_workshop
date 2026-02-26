import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

interface FabProps {
  icon?: keyof typeof Ionicons.glyphMap;
  size?: number;
  buttonColor?: string;
  iconColor?: string;
  style?: ViewStyle;
}


export const FAB = ({icon = 'add', size = 42, buttonColor = 'blue', iconColor = 'white', style = {}, ...rest}: FabProps ) => {
    return (
        <TouchableOpacity style={[styles.fabContainer, {backgroundColor: buttonColor}, style]} {...rest}>
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