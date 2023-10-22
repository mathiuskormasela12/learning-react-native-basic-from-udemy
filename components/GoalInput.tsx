import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';

interface IProps {
  onAddGoal: (text: string) => void;
}

export const GoalInput: React.FC<IProps> = ({onAddGoal}) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  const handleEnteredGoalText = (enteredText: string): void => setEnteredGoalText(enteredText);

  const handleAddGoal = (): void => { 
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder="Your course goal!" value={enteredGoalText} onChangeText={handleEnteredGoalText} />
      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 24
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});