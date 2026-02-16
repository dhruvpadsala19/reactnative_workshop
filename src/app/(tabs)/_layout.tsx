import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#ffd33d'
        }}>
            <Tabs.Screen name="dashboard" options={{
                title: 'Home',
                tabBarIcon: ({color, focused}) {
                    <Ionicons />
                }
            }} />
            <Tabs.Screen name="profile" />
        </Tabs>
    )
}