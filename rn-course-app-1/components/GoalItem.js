import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const GoalItem = ({ goal, onRemove }) => {
  return (
    <View style={styles.listItem}>
      <Text>{goal.value}</Text>
      <TouchableOpacity onPress={onRemove}>
      <View style={styles.removeBtn}>
        <Text style={{ fontWeight: '700', color: 'salmon' }}>X</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 10,
    marginLeft: 0,
    backgroundColor: "#eee",
    borderColor: "black",
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  removeBtn: {
    backgroundColor: '#eee',
    height: 30,
    width: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default GoalItem;
