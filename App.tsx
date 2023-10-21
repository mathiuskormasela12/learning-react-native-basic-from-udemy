import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const App: React.FC = () => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');
  const [courseGoal, setCourseGoal] = useState<String[]>([]);

  const handleEnteredGoalText = (enteredText: string): void => setEnteredGoalText(enteredText);

  const handleAddGoal = (): void => {
    setCourseGoal(currentCourseGoal => [...currentCourseGoal, enteredGoalText])
    setEnteredGoalText('');
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" value={enteredGoalText} onChangeText={handleEnteredGoalText} />
        <Button title="Add Goal" onPress={handleAddGoal} />
      </View>
      <View style={styles.goalContainer}>
        {courseGoal.map((goal) => (
          <Text key={goal.toString()}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
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
  goalContainer: {
    flex: 3
  }
});