import React, { useState } from 'react';
import { StyleSheet, View, Text  } from 'react-native';

export default function App() {
  const [ list, setList ] = useState(['Flamengo', 'Palmeiras', 'Atletico Mineiro', 'São Paulo', 'Internacional', 'Atletico Paranaense', 'Fortaleza', 'America Mineiro', 'Bahia', 'Santos', 'Corinthians', 'Grêmio', 'Bragantino', 'Fluminense', 'Cuiaba', 'Juventude', 'Chapecoense', 'Sport', 'Ceara', 'Atlético Goianiense']);

  const listData = (list, index) => {
    return (
      <Text style={styles.container} key={index}>
          {list}
      </Text>
    )
  }

  return (
    <View style={styles.container}>
        {list.map(listData)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8A2BE2"
  },
});
