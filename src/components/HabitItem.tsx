// components/HabitItem.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Habit } from "../types/types";

interface Props {
  item: Habit;
  onToggle: (id: string) => void;
}

const HabitItem: React.FC<Props> = ({ item, onToggle }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onToggle(item.id)}
    >
      <View style={[styles.checkbox, item.completed && styles.checked]} />
      <Text style={[styles.text, item.completed && styles.completedText]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default HabitItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#555",
    marginRight: 12,
  },
  checked: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#999",
  },
});
