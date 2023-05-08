import React from "react"
import { Image } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"
import { StyleSheet } from "react-native"

export default function CoinFlip() {
    return (
      <View style={styles.coinFlipContainer}>
        <Image source={require('./Coin.png')} style={styles.image} />
        <Text style={styles.text}>Flip a coin</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    coinFlipContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#5bc0be',
      padding: 10,
      borderRadius: 10,  
      width: 150,
    },
    image: {
      width: 100,
      height: 100,
    },
    text: {
      fontSize: 25,
      marginTop: 10,
      fontFamily: "Roboto",
      fontWeight: "400",
    },
  });
  