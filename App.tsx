import React, { useState } from "react";
import { View, Text, Button, TextInput, FlatList , StyleSheet } from "react-native";

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
        <FlatList 
          data={courseGoal} 
          // To hide scroll (default true)
          showsVerticalScrollIndicator={false}

          // To make content is desibled when the item is not overflow yet (default true)
          // it works on iOS only, because in Android if the item is not overflow, the container can't be scrollable
          alwaysBounceVertical={false}

          /* To render component */
          renderItem={(itemData) => {
            const {item, index} = itemData;
            console.log('Index item', index);
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{item}</Text>
              </View>
            )
          }}

          /* 
            To define key.
            But actually it's optional props
            if in our data have key or id property.
            because if our data don't have those properties at least one
            id or key. FlatList will use index instead but it will be bad,
            so bcs of that we have to define our key manually in order to prevent
            FlatList using id.

            So if your data have id or key property, you don't need
            to define the key.
          */
         keyExtractor={(item, index) => item.toString()}
        />
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
  },
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: '#560acc',
    // color: 'white',
    /* This won't work on iOS, because in iOS 
    Text component in iOS don't have border 
    radius, but on Android has it, 
    so it works on Android only.
    In order to fix that issue, we can wrap 
    the Text component to View Component, because
    View component is a general component that have border
    radius. So it means, sometimes we have to write different style
    in order to make our styles works on both platform. */
    borderRadius: 6
  },
  goalText: {
    color: 'white'
  }
});