import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import { generateRandomBetween } from '../utils/generateRandomBetween';

type UseGameScreen = (userNumber: number, onGameOver: () => void) => {
  currentGuess: number; 
  handleGuess: HandleGuess;
}

type Direction = 'lower' | 'greater';

type HandleGuess = (direction: Direction) => void | boolean;

let minBoundary = 1;
let maxBoundary = 100;

const useGameScreen: UseGameScreen = (userNumber, onGameOver) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

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
  }

  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, useEffect, onGameOver])

  return {
    currentGuess,
    handleGuess
  }
}

export default useGameScreen