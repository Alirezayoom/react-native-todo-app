import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function TodoInput({ onAddTodo }) {
  const [enteredText, setEneteredText] = useState("");

  const textInputHandler = (e) => {
    setEneteredText(e);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={textInputHandler}
        placeholder="Add new todo..."
        value={enteredText}
      />
      <Button
        onPress={() => {
          onAddTodo(enteredText);
          setEneteredText("");
        }}
        title="ADD TODO"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default TodoInput;
