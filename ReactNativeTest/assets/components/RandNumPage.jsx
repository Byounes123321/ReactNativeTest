import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { useState } from "react"

export default function RandNumPage() {
  const [result, setResult] = useState('')
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(100)

  function RandNum() {
    setResult(Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter minimum value:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={min}
        onChangeText={(text) => setMin(text)}
      />
      <Text style={styles.label}>Enter maximum value:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={max}
        onChangeText={(text) => setMax(text)}
      />
      <TouchableOpacity style={styles.button} onPress={RandNum}>
        <Text style={styles.buttonText}>Generate Random Number</Text>
      </TouchableOpacity>
      {result !== '' && <Text style={styles.resultText}>Result: {result}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '20%',
    marginBottom: 20,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#00BFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
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
})
