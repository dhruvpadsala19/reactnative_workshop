import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Habit } from "../../../types/types";
import HabitItem from "../../../components/HabitItem";
import { FAB } from "../../../components/FAB";
import { Link } from "expo-router";
import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";
import AddHabitSheet from "../../../components/AddHabitSheet";
import Animated from "react-native-reanimated";

const initialHabits: Habit[] = [
  { id: "1", name: "Drink Water", completed: false },
  { id: "2", name: "Morning Walk", completed: true },
  { id: "3", name: "Read 20 Pages", completed: false },
  { id: "4", name: "Meditation", completed: true },
];

const Dashboard: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [habits, setHabits] = useState<Habit[]>(initialHabits);
  const addHabitSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["50%"], []);
  console.log("Reanimated:", Animated);

  useEffect(() => {
  addHabitSheetRef.current?.expand();
}, []);

  const openAddHabitSheet = () => {
    addHabitSheetRef?.current?.expand();
  }

   const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const completedCount = useMemo(
    () => habits.filter((h) => h.completed).length,
    [habits],
  );

  const remainingCount = habits.length - completedCount;

  const toggleHabit = (id: string) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, completed: !h.completed } : h)),
    );
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi Dhruv 👋</Text>
        <Text style={styles.subTitle}>Let’s build healthy habits today</Text>
      </View>

      {/* SUMMARY */}
      <View style={styles.summaryRow}>
        <View style={[styles.card, styles.doneCard]}>
          <Text style={styles.cardCount}>{completedCount}</Text>
          <Text style={styles.cardLabel}>Done</Text>
        </View>

        <View style={[styles.card, styles.remainingCard]}>
          <Text style={styles.cardCount}>{remainingCount}</Text>
          <Text style={styles.cardLabel}>Remaining</Text>
        </View>
      </View>

      {/* LIST HEADER */}
      <Text style={styles.sectionTitle}>Today’s Habits</Text>

      {/* HABIT LIST */}
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HabitItem item={item} onToggle={toggleHabit} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
      <FAB onPress={openAddHabitSheet} />
      <BottomSheetModal
        ref={addHabitSheetRef}
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose
        style={{ zIndex: 1000 }}
        onChange={handleSheetChanges}
      >
        <View>
          <Text>Inside bottom sheet</Text>
        </View>
      </BottomSheetModal>
      
      {/* <AddHabitSheet ref={addHabitSheetRef} /> */}
    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
    paddingHorizontal: 16,
  },

  /* HEADER */
  header: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  subTitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },

  /* SUMMARY */
  summaryRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  card: {
    flex: 1,
    borderRadius: 18,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  doneCard: {
    backgroundColor: "#E8F5E9",
  },
  remainingCard: {
    backgroundColor: "#FFF3E0",
  },
  cardCount: {
    fontSize: 32,
    fontWeight: "800",
    color: "#111",
  },
  cardLabel: {
    fontSize: 14,
    marginTop: 6,
    color: "#555",
    fontWeight: "500",
  },

  /* LIST */
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#1F2937",
  },
  listContent: {
    paddingBottom: 24,
  },
});
