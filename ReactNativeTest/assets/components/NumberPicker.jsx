import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function NumberPicker() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Min: {min}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setMin(min + 1)}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setMin(min - 1)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Max: {max}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setMax(max + 1)}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setMax(max - 1)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: "#00BFFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
