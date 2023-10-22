import React, {useState} from 'react';
import {View, Button, TextInput, Modal, Image,  StyleSheet} from 'react-native';
// import logo from '../assets/images/goal-logo.png';

interface IProps {
  onAddGoal: (text: string) => void;
  onCancel: () => void;
  visible: boolean;
}

export const GoalInput: React.FC<IProps> = ({onAddGoal, onCancel, visible}) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  const handleEnteredGoalText = (enteredText: string): void => setEnteredGoalText(enteredText);

  const handleAddGoal = (): void => { 
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  /**
   On app.json file we can change background color of all
   the screens. By defining property backgroundColor and
   set hex color as the value. Actually you can type the normal color
   name like red,white or black instead of hex color. But it won't work
   on iOS, so you have to use hex color instead.

   app.json file :
   ../app.json
   */
  
  return (
    <Modal
      visible={visible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        {/* 
          To show image.
          We can style this image by using the style
          property. 

          source props is used to address image path.
          We can use require function or import esmodue
        */}
        <Image 
          style={styles.image} 
          // with require function
          source={require('../assets/images/goal.png')} 
          
          // With import function Es Module, but need to setup the .d.ts file to make typescript know the image extention
          // source={logo}
        />
        <TextInput 
          style={styles.textInput} 
          placeholder="Your course goal!" 
          value={enteredGoalText} 
          onChangeText={handleEnteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title="Cancel" 
              onPress={onCancel}
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button 
              title="Add Goal" 
              onPress={handleAddGoal}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});