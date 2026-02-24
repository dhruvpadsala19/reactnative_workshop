import { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useRef } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
    // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <Button
            onPress={handlePresentModalPress}
            title="Present Modal"
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            onChange={handleSheetChanges}
          >
            <BottomSheetView style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
            </BottomSheetView>
        </BottomSheetModal>
        {/* <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View> */}
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
    container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
