import {
  forwardRef,
  useMemo,
  useState,
} from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import DateTimePickerModal from "react-native-modal-datetime-picker";

type PickerMode = "date" | "time" | "datetime";

const AddHabitSheet = forwardRef<BottomSheet>((props, ref) => {
  const snapPoints = useMemo(() => ["60%", "80%"], []);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [mode, setMode] = useState<PickerMode>("date");

  const showDateTimePicker = (type: PickerMode = "date") => {
    setMode(type);
    setShowPicker(true);
  };

  const formatDate = (type: PickerMode) => {
    let options: Intl.DateTimeFormatOptions = {
      timeZone: "Asia/Kolkata",
    };

    if (type === "date" || type === "datetime") {
      options = { ...options, day: "2-digit", month: "2-digit", year: "numeric" };
    }

    if (type === "time" || type === "datetime") {
      options = { ...options, hour: "2-digit", minute: "2-digit", hour12: false };
    }

    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  const handleConfirm = (selectedDate: Date) => {
    if (selectedDate < new Date()) {
      Alert.alert("Past date & time not allowed");
      return;
    }

    setDate(selectedDate);
    setShowPicker(false);
  };

  const handleSubmit = () => {
    if (!title.trim()) {
      Alert.alert("Please enter habit title");
      return;
    }

    console.log("Habit:", title, date);

    setTitle("");
    (ref as any)?.current?.close();
  };

  return (
    <>
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
      >
        <View style={styles.content}>
          <Text style={styles.heading}>Add Habit</Text>

          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Habit title"
          />

          <TouchableOpacity
            style={styles.dateSelector}
            onPress={() =>
              Platform.OS === "ios"
                ? showDateTimePicker("datetime")
                : showDateTimePicker("date")
            }
          >
            <Text style={styles.dateText}>
              {Platform.OS === "ios"
                ? formatDate("datetime")
                : `${formatDate("date")} • ${formatDate("time")}`}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryBtn} onPress={handleSubmit}>
            <Text style={styles.primaryText}>Create Habit</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>

      <DateTimePickerModal
        isVisible={showPicker}
        mode={mode}
        date={date}
        minimumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={() => setShowPicker(false)}
      />
    </>
  );
});

export default AddHabitSheet;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F3F4F6",
    padding: 14,
    borderRadius: 14,
    marginBottom: 15,
  },
  dateSelector: {
    backgroundColor: "#F3F4F6",
    padding: 14,
    borderRadius: 14,
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
  },
  primaryBtn: {
    backgroundColor: "#1D4ED8",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  primaryText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});