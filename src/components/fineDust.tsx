import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ref, get } from 'firebase/database';
import { db } from '../../data/firebase';

export default function FineDust() {
  const [fineDust, setFineDust] = useState(0);

  useEffect(() => {
    const dbRef = ref(db);
    get(dbRef)
      .then((snapshot: { exists: () => any; val: () => { (): any; new(): any;[x: string]: React.SetStateAction<number>; }; }) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setFineDust(snapshot.val()['미세먼지']);
        } else {
          console.log('No data available');
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  });

  return (
    <View>
      <Text>미세먼지: {fineDust}</Text>
    </View>
  );
}
