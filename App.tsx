import {useState} from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);

  const handlePickNumber = (pickedNumber: number): void => setUserNumber(pickedNumber);

  let screen = <StartGameScreen onPickNumber={handlePickNumber} />;

  if(userNumber) {
    screen = <GameScreen />
  }

  return (
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
