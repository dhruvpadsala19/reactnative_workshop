import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#ffd33d'
        }}>
            <Tabs.Screen name="profile" />
        </Tabs>
    )
}