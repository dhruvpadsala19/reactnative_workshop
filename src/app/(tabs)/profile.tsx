import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
    return(
        <View>
            <Text>On Profile Screen</Text>
            <Link href="/modal">Open modal</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
    }
})