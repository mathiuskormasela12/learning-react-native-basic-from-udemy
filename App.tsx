import {useState} from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const [fontsLoaded] = useFonts({
    'my-bold-font': require('./assets/fonts/OpenSans-Bold.ttf'),
    'my-regular-font': require('./assets/fonts/OpenSans-Regular.ttf')
  })

  const handlePickNumber = (pickedNumber: number): void => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  const handleGameOver = (value: number): void => {
    setGameIsOver(true);
    setGuessRounds(() => value);
  }

  let screen = <StartGameScreen onPickNumber={handlePickNumber} />;

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />
  }

  const handleStartNewGame = (): void => {
    setUserNumber(null);
    setGuessRounds(0);
  }

  if(gameIsOver && userNumber) {
    screen = (
      <GameOverScreen 
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={handleStartNewGame}
      />
    )
  }

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      {
        // StatusBar
      }
      <StatusBar translucent style="light" />
      <LinearGradient 
        style={styles.rootScreen}
        colors={['#4e0329', '#ddb52f']}
      >
        <ImageBackground
          source={require('./assets/images/background.png')}
          style={styles.rootScreen}
          imageStyle={styles.imageBackground}
          resizeMode="cover"
        > 
        {
          /**
            SafeAreaView is used to put our its children to bottom of
            status bar.  
          */
        }
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.15
  } 
});
