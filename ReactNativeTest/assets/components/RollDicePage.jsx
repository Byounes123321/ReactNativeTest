import { Text, View } from "react-native"
import { TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native"
import { useState } from "react"

export default function RollDicePage() {
    const [result, setResult] = useState('');
    function rollDice(faces = 6) {
        setResult(Math.floor(Math.random() * faces) + 1);
    }

    return (
        <>
        <View style={styles.container}>
        <TouchableOpacity style={styles.button}  onPress={()=>rollDice()}>
        <Text style={styles.buttonText}>Roll Dice</Text>
      </TouchableOpacity>
      {result !== '' && (
        <Text style={styles.resultText}>Result: {result}</Text>
      )}
      </View>
      </>
    )
}

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
    })