import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

import getMeal from '../../utils/getMeal';

export default function MealBoard() {
  const [check, setCheck] = useState(false);
  const [meal, setMeal] = useState([['조식'], ['중식'], ['석식']]);

  useEffect(() => {
    async function checkData() {
      const data = await getMeal();

      setMeal(data);
      setCheck(true);
    }
    checkData();
  });

  return check ? (
    meal == null ? (
      <View style={stlyes.mealBoard}>
        <Text>조식</Text>
        <FlatList data={meal[0]} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => <Text>{item}</Text>} />
        <Text>중식</Text>
        <FlatList data={meal[1]} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => <Text>{item}</Text>} />
        <Text>석식</Text>
        <FlatList data={meal[2]} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => <Text>{item}</Text>} />
      </View>
    ) : (
      <View>
        <Text>오늘은 급식이 없나벼...</Text>
      </View>
    )
  ) : (
    <View>
      <ActivityIndicator size="large" color="#FC8EAC" />
    </View>
  );
}

const stlyes = StyleSheet.create({
  mealBoard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
