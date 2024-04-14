import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredText, setEneteredText] = useState("");
  const [todos, setTodos] = useState([]);

  const textInputHandler = (e) => {
    setEneteredText(e);
  };

  const buttonHandler = () => {
    setTodos((prevTodos) => [...prevTodos, enteredText]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={textInputHandler}
          placeholder="Add new todo..."
        />
        <Button onPress={buttonHandler} title="ADD TODO" />
      </View>
      <View style={styles.line}></View>
      <View style={styles.todoList}>
        <ScrollView>
          {todos.map((todo) => (
            <View key={todo + Math.random()} style={styles.todoItem}>
              <Text style={{ color: "white" }}>{todo}</Text>
            </View>
          ))}
        </ScrollView>
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 16,
  },
  textInput: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  todoList: {
    flex: 5,
  },
  todoItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#333",
  },
});
