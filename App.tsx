import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const App: React.FC = () => {
  return (
    // View component is used to hold another component, like div in html but View component can't wrap text
    <View style={styles.container}>
     <View>
      {
        // Text component is used to wrap text
      }
      <Text style={styles.text}>Another piece of text!</Text>
      {
        // Define inline styles
      }
      <Text style={{color: 'red',  
        padding: 12,
        margin: 12,
        borderWidth: 2,
        borderColor: 'blue'
        }}
      >Another piece of text!</Text>
     </View>
     <Text style={styles.text}>Hello Wordl!</Text>
     <Button title="Tap Me" />
    </View>
  )
}

export default App;

// Define styles
// if we define style using StyleSheet, we will be having auto-complete and will improve performance.
// if we fill style property with wrong value, React Native will show error. But if we use plain object instead, 
// React Native will not throw error. So we recommend us to use StyleSheet.create to define style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    padding: 12,
    margin: 12,
    borderWidth: 2,
    borderColor: 'blue'
  }
})