import React from "react"
import { Image } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"
import { StyleSheet } from "react-native"

export default function RandNum() {
    return (
      <View style={styles.numContainer}>
        <Image source={require('./RNG.png')} style={styles.image} resizeMode="cover"  />
        <Text style={styles.text}>RNG</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    numContainer: {
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
  