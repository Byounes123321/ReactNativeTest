import React from "react"
import { Image } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"
import { StyleSheet } from "react-native"

export default function RollDice() {
    return (
      <View style={styles.diceContainer}>
        <Image source={require('./Dice.png')} style={styles.image} />
        <Text style={styles.text}>Roll Dice</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    diceContainer: {
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
    //   fontFamily: "Roboto",
      fontWeight: "400",
    },
  });
  