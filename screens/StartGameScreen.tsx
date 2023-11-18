import React, {useState} from 'react';
import {View, TextInput, Alert, KeyboardAvoidingView, ScrollView, useWindowDimensions, StyleSheet} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import Title from '../components/ui/Title';
import InstructionText from '../components/ui/InstructionText';

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

  // will automatically affected because it is a hook
  // if we use Dimension API the size will render once,
  // but if we use useWindowDimensions, it will rerender when user
  // change the orientation
  const {height} = useWindowDimensions()

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView behavior='position' style={styles.screen}>
        <View style={[styles.rootScreen, {marginTop: marginTopDistance}]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
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
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootScreen: {
    flex: 1,
    alignItems: 'center'
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