import React from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native';

interface IProps {
  text: string;
  id: string;
  onDeleteGoal: (id: string) => void;
}

export const GoalItem: React.FC<IProps> = ({text, id, onDeleteGoal}) => {

  return (
    // To make ripple effect on android, it won't work on iOS
    /* 
      it will ripple on outsite of view component, 
      we can move the Pressable to be child of 
      View component if we want to make 
      ripple effect inside of View component
    */
    // <Pressable android_ripple={{color: 'red'}}>
    //   <View style={styles.goalItem}>
    //     <Text style={styles.goalText}>{text}</Text>
    //   </View>
    // </Pressable>


     // To make ripple effect on android, it won't work on iOS
    /* 
      it will ripple on inside of view component, 
      we can move the Pressable to be parent of 
      View component if we want to make 
      ripple effect outside of View component
    */
    <View style={styles.goalItem}>
      <Pressable 
        android_ripple={{color: 'red'}}

        // Because riple effect don't work on iOS we can use style instead
        style={(pressedData) => {
          // Pressed is boolean variable, that determain if the Pressable is pressed or not
          // it Pressable is pressed, the value will be true
          // but it pressable is not pressed, the value will be false
          const {pressed} = pressedData;

          // If the pressable presed, we will add pressed style
          return pressed && styles.pressed;
        }}

        onPress={onDeleteGoal.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    // padding: 8, // we move the padding to goalText bcs we want the ripple effect is take full size of View component
    backgroundColor: '#560acc',
    borderRadius: 6
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressed: {
    opacity: 0.5
  }
});