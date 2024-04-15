import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (enteredText) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: enteredText },
    ]);
  };

  return (
    <View style={styles.container}>
      <TodoInput onAddTodo={addTodoHandler} />
      <View style={styles.line}></View>
      <View style={styles.todoList}>
        <FlatList
          data={todos}
          renderItem={(itemData) => {
            return <TodoItem text={itemData.item.text} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    padding: 32,
  },

  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 16,
  },
  todoList: {
    flex: 5,
  },
});
