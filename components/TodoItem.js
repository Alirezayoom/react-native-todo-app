import { StyleSheet, View, Text, Pressable } from "react-native";

function TodoItem({ text, id, onDeleteTodo }) {
  return (
    <Pressable onPress={() => onDeleteTodo(id)}>
      <View style={styles.todoItem}>
        <Text style={{ color: "white" }}>{text}</Text>
      </View>
    </Pressable>
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
