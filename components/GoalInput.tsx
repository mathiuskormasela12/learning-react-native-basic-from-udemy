import React, {useState} from 'react';
import {View, Button, TextInput, Modal, StyleSheet} from 'react-native';

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
  
  return (
    <Modal
      // This one to determain model is shown or not. (boolean)
      // it's true then the modal will be shown
      // its' false then the modal will be hidden
      visible={visible}
      // To define animation
      // We can select slide or fade
      // the default value is none,that means modal don't have any animation by default 
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Your course goal!" 
          value={enteredGoalText} 
          onChangeText={handleEnteredGoalText}
        />
        <View style={styles.buttonContainer}>
          {/* 
            We can style button by wrapping 
            button with View component. But we're only
            able to style its width or height. We can't
            change its text color or backgroundColor.
            If we want to do that, we have to build our 
            own custom button.
          */}
          <View style={styles.button}>
            <Button 
              title="Add Goal" 
              onPress={handleAddGoal}
            />
          </View>
          <View style={styles.button}>
            <Button 
              title="Cancel" 
              onPress={onCancel}
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
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 24,
    padding: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
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
  }
});