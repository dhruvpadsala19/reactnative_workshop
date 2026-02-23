import { useState } from "react";
import { Alert, Button, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

type PickerMode = "date" | "time" | "datetime";

const AddHabit = () => {
    const [title, setTitle] = useState<string>("");
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState<boolean>(false);
    const [mode, setMode] = useState<PickerMode>("date");

    const showDateTimePicker = (type:PickerMode = "date") => {
        setMode(type);
        
        setShowPicker(true);
    }

    const formatDate = (type: PickerMode) => {
        let options: Intl.DateTimeFormatOptions = {
            timeZone: "Asia/Kolkata",
        };
        let dateOptions: Intl.DateTimeFormatOptions = {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        };
        let timeOptions: Intl.DateTimeFormatOptions = {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false, // 24-hour format
        };

        switch(type) {
            case "time" :
                options = { ...options, ...timeOptions };
                break;
            case "date" :
                options = { ...options, ...dateOptions };
                break;
            case "datetime" :
                options = { ...options, ...dateOptions, ...timeOptions };
                break;
        }


        return new Intl.DateTimeFormat("en-GB", options).format(date);
    };

    const handleConfirm = (date: Date) => {
        if (mode === 'time' && date < new Date()) {
            Alert.alert("past date & time not allowed");
        }
        setDate(date);
        setShowPicker(false);
    }

    const handleSubmit = () => {
        console.log('inside handle submit');
    }

    return (
        <View style={styles.container}>
            <Text>Habit Title</Text>
            <TextInput 
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Enter habit title"
            />
            <Text>Select Datetime</Text>
            {Platform.OS == 'ios' ? (
                <TouchableOpacity style={styles.selector} onPress={() => showDateTimePicker("datetime")}>
                    <Text>
                        {formatDate("datetime")}
                    </Text>
                </TouchableOpacity>
            ) : (
                <>
                    <TouchableOpacity style={styles.selector} onPress={() => showDateTimePicker()}>
                        <Text>{formatDate("date")}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.selector} onPress={() => showDateTimePicker("time")}>
                        <Text>
                            {formatDate("time")}
                        </Text>
                    </TouchableOpacity>
                </>
            )}

            <Button title="submit" onPress={handleSubmit} />
            <DateTimePickerModal 
                isVisible={showPicker}
                mode={mode}
                date={date}
                minimumDate={date}
                onConfirm={handleConfirm}
                onCancel={() => setShowPicker(false)}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
    },
    selector: {
        padding: 12,
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
        marginBottom: 15,
    },
});

export default AddHabit;