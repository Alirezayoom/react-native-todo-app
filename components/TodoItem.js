import { StyleSheet, View, Text } from "react-native";

function TodoItem({ text }) {
  return (
    <View style={styles.todoItem}>
      <Text style={{ color: "white" }}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#333",
  },
});

export default TodoItem;
