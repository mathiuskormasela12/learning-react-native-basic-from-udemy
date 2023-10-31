import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Title from '../components/ui/Title';
import useGameScreen from '../hooks/useGameScreen';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

interface IProp {
  userNumber: number;
  onGameOver: (value: number) => void;
}

const GameScreen: React.FC<IProp> = ({userNumber, onGameOver}) => {
  const {currentGuess, handleGuess, guessRounds} = useGameScreen(userNumber, onGameOver)

  const guessRoundsListLength = guessRounds.length;

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
     <View style={styles.listContainer}>
      {/* {guessRounds.map(item => (
        <Text key={item}>{item}</Text>
      ))} */}

      <FlatList 
        data={guessRounds}
        keyExtractor={(item, index) => item.toString()}
        renderItem={({index, item}) => (
          <GuessLogItem  
            roundNumber={guessRoundsListLength - index}
            guess={item}
          />
        )}
      />
     </View>
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
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
})