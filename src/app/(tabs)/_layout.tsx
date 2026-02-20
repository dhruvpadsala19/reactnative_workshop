import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            // tabBarActiveTintColor: '#ffd33d'
        }}>
            <Tabs.Screen name="(home)" options={{headerShown: false, title: 'Home', tabBarIcon: ({focused, color}) => (<Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />) }} />
            <Tabs.Screen name="profile" options={{title: 'Profile', tabBarIcon: ({focused, color}) => (<Ionicons name={focused ? "person" : "person-outline"} size={24} color={color} />)}} />
        </Tabs>
    )
}