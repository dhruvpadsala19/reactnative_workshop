import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.title}>React Native Workshop</Text>

      <Text style={styles.subtitle}>Initial Setup Completed Successfully</Text>

      <Text style={styles.description}>
        Your environment is ready.
        {"\n"}Let’s explore React Native step by step
        {"\n"}and build amazing apps together!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#4CAF50",
    marginBottom: 16,
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    lineHeight: 22,
  },
});
