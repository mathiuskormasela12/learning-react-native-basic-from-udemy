import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen: React.FC = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput}

        // To set keyboard type, but some of type only available on specific platform
        // you can refer from documentation
        keyboardType="number-pad" 

        // To set max length of text input
        maxLength={2}

        // To disablwd auto capitalize text (only works on text input, not in number input)
        autoCapitalize={"none"} 

        // TO disable auto correct (only works on text input, not in number input)
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>
            Reset
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#3b021f',
    borderRadius: 8,
    alignItems: 'center',

    // To add shadow on Android
    elevation: 2,

    // To add shadow on iOS
    shadowColor: 'black', // To set shadow color
    shadowOffset: {
      width: 0, // To set shadow position, left or right
      height: 2 // To set shadow position, top or bottom
    }, // To set shadow position
    shadowRadius: 6, // To set shadow radius
    shadowOpacity: 0.25 // To set shadow opacity
  },

  textInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    color: '#ddb52f',
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  buttonsContainer: {
    flexDirection: 'row'
  },

  buttonContainer: {
    flex: 1
  }
})