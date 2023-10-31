import React, {useState} from 'react';
import {View, TextInput, Alert, StyleSheet} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';

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
        'Invalid number!',
        'Number has to be between 1 and 99',
        [
          {
            text: 'Okay',
            style: 'destructive'
          },
        ]
      );
      return false;
    }
    
    onPickNumber(pickedNumber);
    return true;
  }

  return (
    <Card>
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
    </Card>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
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