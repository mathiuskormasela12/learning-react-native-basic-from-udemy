import React, { PropsWithChildren } from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../../constants/colors';

const Card: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    alignItems: 'center',

    // To add shadow on Android
    elevation: 2,

    // To add shadow on iOS
    shadowColor: 'black', // To set shadow color
    shadowOffset: {
      width: 0, // To set shadow position, left or right
      height: 2 // To set shadow position, top or bottom
    }, // To set shadow position
    shadowRadius: 6, // To set shadow radius
    shadowOpacity: 0.25 // To set shadow opacity
  },
});