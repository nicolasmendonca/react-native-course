import React from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

const GoalInput = ({ onGoalAdded, visible, onDismiss }) => {
  const [enteredGoal, setEnteredGoal] = React.useState("");

  function handleAdd() {
    onGoalAdded(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Course Goal"
          style={styles.textInput}
          value={enteredGoal}
          onChangeText={setEnteredGoal}
          onSubmitEditing={handleAdd}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={onDismiss} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={handleAdd} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: 100,
    // backgroundColor: 'lightgreen'
  },
});

export default GoalInput;
