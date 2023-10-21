import React, { useState } from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from "react-native";

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
        {/* 
          ScrollView Component is used to make 
          the child component scrollable. It can be used
          if we want to create scrollable layout, if we want to make
          sure our layout can work nicely on each devices when we don't
          know which device that user will use (maybe user will use our app
          on small device and it will make our content is hidden when the 
          content size is overflow, so in order to fix it, we can use
          ScrollView component).

          But ScrollView will render all items 
          at once when component is rendered. So for example
          if we have 5000 items, then those items will be rendered
          at once and it will slow down our app.

          So don't we use ScrollView on that case, we can use
          FlatList component instead.

          So actually we will use ScrollView when we want to
          create scrollable layout. but when we want to create
          dynamic list, we can use FlatList instead.
        */}
        <ScrollView
          // To hide scrollbar
          showsVerticalScrollIndicator={false}

          // To make items can't be scrollable if the items/child is not overflow. (iOS only)
          alwaysBounceVertical={false}
        >
          {courseGoal.map((goal) => (
            // <Text key={goal.toString()} style={styles.goalItem}>{goal}</Text>
            <View key={goal.toString()} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
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