import { ImageBackground, StyleSheet } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient 
      style={styles.rootScreen}
      // To set colors
      colors={['#4e0329', '#ddb52f']}
    >
      <ImageBackground
        // image path
        source={require('./assets/images/background.png')}

        // container style
        style={styles.rootScreen}

        // image style
        imageStyle={styles.imageBackground}

        // to set resize mode, similar to backgroundSize CSS
        resizeMode="cover"
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f'
  },
  imageBackground: {
    opacity: 0.15
  } 
});
