import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Title from '../components/ui/Title';
import useGameScreen from '../hooks/useGameScreen';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

interface IProp {
  userNumber: number;
  onGameOver: () => void;
}

const GameScreen: React.FC<IProp> = ({userNumber, onGameOver}) => {
  const {currentGuess, handleGuess} = useGameScreen(userNumber, onGameOver)

  return (
   <View style={styles.screen}>
     <Title>Opponent's Guess</Title>
     <NumberContainer>
      {currentGuess}
     </NumberContainer>
     <Card>
      <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleGuess.bind(this, 'lower')}>
            {
              /* 
                When you want to use icon in React Native Expo
                is easy. We don't need to install additional package
                because that package already includes on expo.
              */
            }
            <Ionicons 
              size={24} 
              name='md-remove' 
              color={'white'} 
            />
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={handleGuess.bind(this, 'greater')}>
            <Ionicons size={24} name='md-add' color={'white'} />
          </PrimaryButton>
        </View>
      </View>
     </Card>
     {/* <View>LOG ROUNDS</View> */}
   </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
  instructionText: {
    marginBottom: 12
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
})