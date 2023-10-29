import React, { PropsWithChildren } from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
import { TextStyle } from 'react-native';

interface IProp extends PropsWithChildren {
  style?: TextStyle;
}

const InstructionText: React.FC<IProp> = ({children, style}) => {
  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  )
}

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    color: Colors.accent500,
    fontSize: 24
  }
})