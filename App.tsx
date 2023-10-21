import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import MealBoard from './src/components/mealBoard';
import FineDust from './src/components/fineDust';


export default function App() {
  
  return (
    <>
      <SafeAreaView style={styles.mealBoard}>
        <Text style={{flex: 1}}></Text>
        <Text>급식표 테스트</Text>
        <MealBoard />
        <FineDust />
        <Text style={{flex: 1}}></Text>
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
