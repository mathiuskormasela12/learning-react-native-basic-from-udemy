import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {StatusBar} from "expo-status-bar"

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})