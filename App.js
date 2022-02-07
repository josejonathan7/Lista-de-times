import React, { useState } from 'react';
import { View, Text, ScrollView  } from 'react-native';
import { style } from './style'

export default function App() {
  const [ list, setList ] = useState(['America Mineiro', 'Atlético Goianiense', 'Atletico Mineiro', 'Atletico Paranaense', 'Bahia', 'Bragantino', 'Ceara', 'Chapecoense', 'Corinthians', 'Cuiaba', 'Flamengo', 'Fortaleza', 'Fluminense', 'Grêmio', 'Internacional', 'Juventude', 'Palmeiras', 'Santos', 'São Paulo', 'Sport']);

  const listData = (list, index) => {
    return (
      
        <Text style={style.container} key={index}>
            {list}
        </Text>
    )
  }

  return (
    <ScrollView style={style.container}>
  {list.map(listData)}
    </ScrollView>
  );
}

