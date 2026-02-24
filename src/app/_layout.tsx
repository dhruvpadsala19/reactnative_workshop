import 'react-native-gesture-handler';
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const unstable_settings = {
  anchor: '(tabs)', // Anchor to the index route
};

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{headerShown: false}}></Stack.Screen>
                    <Stack.Screen name="modal" options={{presentation: 'modal'}}></Stack.Screen>
                </Stack>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
}