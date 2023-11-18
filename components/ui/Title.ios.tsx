import React, { PropsWithChildren } from 'react';
import {Text, Platform, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';

const Title: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <Text style={styles.title}>
      {children}
    </Text>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',

    // Define style for specific Platform first way
    // borderWidth: Platform.OS === 'android' ? 2 : 0,

    // Define style for spesific Platform second way
    // borderWidth: Platform.select({ios: 0, android: 2}),

    // Define style for spesific Platform third way, we can rename our file extension to .android.ts for spesific android and .ios.ts for specifig iOS

    borderColor: Colors.accent500,
    padding: 12,
    maxWidth: '80%',
    width: 300
  }
})