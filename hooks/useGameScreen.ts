import {useEffect, useState} from 'react';
import {Alert, useWindowDimensions} from 'react-native';
import { generateRandomBetween } from '../utils/generateRandomBetween';

type UseGameScreen = (userNumber: number, onGameOver: (value: number) => void) => {
  currentGuess: number; 
  handleGuess: HandleGuess;
  guessRounds: number[];
  width: number;
}

type Direction = 'lower' | 'greater';

type HandleGuess = (direction: Direction) => void | boolean;

let minBoundary = 1;
let maxBoundary = 100;

const useGameScreen: UseGameScreen = (userNumber, onGameOver) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([]);

  const handleGuess: HandleGuess = (direction) => {
    if(
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {
          text: 'Sorry!',
          style: 'cancel'
        }
      ])
      return false
    }

    if(direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRnDNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(() => newRnDNumber);
    setGuessRounds((prevGuessRounds) => [newRnDNumber, ...prevGuessRounds])
  }

  const {width} = useWindowDimensions();

  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, useEffect, onGameOver])

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return {
    currentGuess,
    handleGuess,
    guessRounds,
    width
  }
}

export default useGameScreen