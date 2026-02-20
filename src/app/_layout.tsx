import { Stack } from "expo-router";

export const unstable_settings = {
  anchor: '(tabs)', // Anchor to the index route
};

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="modal" options={{presentation: 'modal'}}></Stack.Screen>
        </Stack>
    );
}