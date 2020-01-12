import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Components/Header';
import StartGameScreen from './screens/StartGameScreen';
export default function App() {
  return (
    <View style={styles.screen}>
      <Header title={'Guess a Number'} />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
