import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

const GameOverScreen: React.FC = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        {
          /*
            When you put Text component inside Text component
            the parent style will be applied to the child 
            component as well. But it doesn't mean React Native
            style has  cascading style, but it only happens because
            of native UI element.
          */
        }
        Your phone needed <Text style={styles.highlight}>X</Text> rounds to
        guess the number <Text style={styles.highlight}>Y</Text>.
      </Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    // Kita set borderRadius setengah dari ukuran width dan height
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 26
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'my-regular-font',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    color: Colors.primary500,
    fontFamily: 'my-bold-font'
  }
})