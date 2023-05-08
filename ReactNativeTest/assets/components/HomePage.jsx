import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native';
import CoinFlip from './CoinFlip';
import RollDice from './RollDice';
import RandNum from './RandNum';
import Settings from './Settings';
import CoinFlipPage from './CoinFlipPage';



export default function HomePage({navigation}) {
  return (
    <>
    <View style={styles.titleContainer}>
      <Text style={styles.text}>
        Welcome To My Odds App
        </Text>
    </View>
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableHighlight
          onPress={()=>navigation.navigate('CoinFlipPage')}>
        <CoinFlip/>
        </TouchableHighlight>
        <TouchableHighlight
            onPress={() => navigation.navigate('RollDicePage')}>
        <RollDice/>
        </TouchableHighlight>
      </View>
      <View style={styles.row}>
      <TouchableHighlight
            onPress={() => navigation.navigate('RandNumPage')}>
        <RandNum/>
        </TouchableHighlight>
        <Settings/>
      </View>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  titleContainer: {
    marginTop: 150,
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 55,
    color: '#0B132B',
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  }
});
