import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

const AddHabit = () => {
    const [datetime, setDatetime] = useState(new Date());
    const [open, setOpen] = useState(false);
    return (
        <View>
            <Text>In add habit screen</Text>
            <TouchableOpacity onPress={() => setOpen(true)}>
                <Text>Select Datetime</Text>
            </TouchableOpacity>
            <DateTimePicker 
                open={open} 
                value={datetime} 
                onConfirm={(datetime) => {
                    setOpen(false);
                    setDatetime(datetime);
                }}
                onCancel={() => setOpen(false)}
            />
        </View>
    );
}

export default AddHabit;