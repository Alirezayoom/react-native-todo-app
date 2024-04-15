import { StyleSheet, View, Text, Pressable } from "react-native";

function TodoItem({ text, id, onDeleteTodo }) {
  return (
    <View style={styles.todoItem}>
      <Pressable
        android_ripple={{ color: "gray" }}
        onPress={() => onDeleteTodo(id)}
      >
        <Text style={{ color: "white", padding: 8 }}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    overflow: "hidden",
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#333",
  },
});

export default TodoItem;
