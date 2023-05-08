import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CoinTossPage = () => {
  const [result, setResult] = useState('');
  const coinSides = ['Heads', 'Tails'];

  const tossCoin = () => {
    const randomIndex = Math.floor(Math.random() * 2);
    setResult(coinSides[randomIndex]);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={tossCoin}>
        <Text style={styles.buttonText}>Toss Coin</Text>
      </TouchableOpacity>
      {result !== '' && (
        <Text style={styles.resultText}>Result: {result}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#00BFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  resultText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CoinTossPage;
