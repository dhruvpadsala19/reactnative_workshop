import { Stack } from "expo-router";

export default function HomeLayout () {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title: 'Home'}}></Stack.Screen>
            <Stack.Screen name="add-habit" options={{title: 'Add Habit', presentation: 'modal'}}></Stack.Screen>
        </Stack>
    )
}