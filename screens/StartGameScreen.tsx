import React, {useState} from 'react';
import {View, TextInput, Alert, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

interface IProps {
  onPickNumber: (pickedNumber: number) => void;
}

const StartGameScreen: React.FC<IProps> = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const handleEnteredNumber = (value: string): void => setEnteredNumber(value);

  const handleResetInput = (): void => setEnteredNumber('');

  const handleConfirm = (): boolean => {
    const pickedNumber: number = parseInt(enteredNumber);

    if(isNaN(pickedNumber) || pickedNumber <= 0 || pickedNumber > 99) {
      Alert.alert(
        'Invalid number!', // Title
        'Number has to be between 1 and 99', // Description
        [
          {
            text: 'Okay', // Button Text
            style: 'destructive' // Butten Style, value => 'cancel', 'default' or 'destructive'
          },
        ] // Button List, on Android max 3 buttons, on on iOS you can add more 3 buttons
      );
      return false;
    }
    
    onPickNumber(pickedNumber);
    return true;
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput}
        keyboardType="number-pad" 
        maxLength={2}
        autoCapitalize={"none"} 
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={handleEnteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleResetInput}>
            Reset
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleConfirm}>
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