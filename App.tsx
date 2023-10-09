import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import MealBoard from './src/components/mealBoard';
import firebase from './data/firebase';
console.log(firebase);
export default function App() {
  
  return (
    <>
      <SafeAreaView style={styles.mealBoard}>
        <Text>급식표 테스트</Text>
        <MealBoard />
        {/* <ActivityIndicator size="large" color="#FC8EAC" /> */}
        <StatusBar style="auto" />
      </SafeAreaView> 
    </>
  );
}

const styles = StyleSheet.create({
  mealBoard: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});
