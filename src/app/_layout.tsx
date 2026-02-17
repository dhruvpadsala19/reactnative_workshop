import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false}}></Stack.Screen>
            <Stack.Screen name="add-habit"></Stack.Screen>
        </Stack>
    );
}