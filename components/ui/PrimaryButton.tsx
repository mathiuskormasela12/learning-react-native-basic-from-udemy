import React, { PropsWithChildren } from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

interface IProp extends PropsWithChildren {
  onPress?: () => void;
}

const PrimaryButton: React.FC<IProp> = ({children, onPress}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        onPress={onPress} 
        style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer }
        android_ripple={{
          color: '#640233'
        }}
      >
        <Text style={styles.buttonText}>
          {children}
        </Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    overflow: 'hidden',
    borderRadius: 8,
    margin: 4
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  },
  pressed: {
    opacity: 0.75
  }
});