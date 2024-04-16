import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addTodoHandler = (enteredText) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: enteredText },
    ]);
    setIsModalVisible(false);
  };

  const deleteTodoHandler = (id) => {
    setTodos((prevTodos) => {
      return todos.filter((item) => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => setIsModalVisible(true)} title="Add New Todo" />
      <TodoInput
        isModalVisible={isModalVisible}
        onAddTodo={addTodoHandler}
        onCancelTodo={() => setIsModalVisible(false)}
      />
      <View style={styles.line}></View>
      <View style={styles.todoList}>
        {todos.length === 0 && (
          <Text style={{ textAlign: "center" }}>Empty List!</Text>
        )}
        <FlatList
          data={todos}
          renderItem={(itemData) => {
            return (
              <TodoItem
                text={itemData.item.text}
                onDeleteTodo={deleteTodoHandler}
                id={itemData.item.id}
              />
            );
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
