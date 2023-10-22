import React, { useState } from "react";
import { View, FlatList , StyleSheet, Alert } from "react-native";
import { GoalInput, GoalItem } from "./components";

interface IState {
  text: string;
  id: string;
}

const App: React.FC = () => {
  const [courseGoal, setCourseGoal] = useState<IState[]>([]);

  const handleAddGoal = (enteredGoalText: string): void => {
    setCourseGoal(currentCourseGoal => [...currentCourseGoal, {
      text: enteredGoalText,
      id: Math.random().toString()
    }])
  };

  const handleDeleteGoalItem = (id: string): void => {
    Alert.alert('DELETED', "The selected goal has been deleted")
    setCourseGoal(currentGoal => currentGoal.filter(goal => goal.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={handleAddGoal} />
      <View style={styles.goalContainer}>
        <FlatList 
          data={courseGoal} 
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
           return (
            <GoalItem id={itemData.item.id} text={itemData.item.text} onDeleteGoal={handleDeleteGoalItem} />
           )
          }}
         keyExtractor={(item, index) => item.id.toString()}
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
  goalContainer: {
    flex: 3
  },
});