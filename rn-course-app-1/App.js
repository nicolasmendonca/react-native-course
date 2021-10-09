import React from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Modal,
} from "react-native";
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

let id = 0;

export default function App() {
  const [courseGoals, setCourseGoals] = React.useState([]);
  const [isAddMode, setIsAddMode] = React.useState(false);

  function handleAdd(goalValue) {
    if (goalValue.trim() === '') return
    id += 1;
    setCourseGoals([...courseGoals, { id, value: goalValue }]);
    setIsAddMode(false)
  }

  function handleRemoveGoal(id) {
    setCourseGoals(courseGoals.filter(goal => goal.id !== id))
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onGoalAdded={(goalValue) => handleAdd(goalValue)} visible={isAddMode}  onDismiss={() => setIsAddMode(false)} />
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        data={courseGoals}
        renderItem={({ item }) => {
          return (
            <GoalItem goal={item} onRemove={() => handleRemoveGoal(item.id)} />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingTop: 30,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
