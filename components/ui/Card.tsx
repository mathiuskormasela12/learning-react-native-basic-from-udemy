import React, { PropsWithChildren } from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Colors from '../../constants/colors';

const Card: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black', 
    shadowOffset: {
      width: 0,
      height: 2 
    }, 
    shadowRadius: 6, 
    shadowOpacity: 0.25
  },
});