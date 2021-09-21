import React, { useState } from 'react';
import { StyleSheet, View, Text  } from 'react-native';

export default function App() {
  const [ list, setList ] = useState(['America Mineiro', 'Atlético Goianiense', 'Atletico Mineiro', 'Atletico Paranaense', 'Bahia', 'Bragantino', 'Ceara', 'Chapecoense', 'Corinthians', 'Cuiaba', 'Flamengo', 'Fortaleza', 'Fluminense', 'Grêmio', 'Internacional', 'Juventude', 'Palmeiras', 'Santos', 'São Paulo', 'Sport']);

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
