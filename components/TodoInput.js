import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

function TodoInput({ onAddTodo, onCancelTodo, isModalVisible }) {
  const [enteredText, setEneteredText] = useState("");

  const textInputHandler = (e) => {
    setEneteredText(e);
  };

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={textInputHandler}
          placeholder="Add new todo..."
          value={enteredText}
        />
        <View style={{ flexDirection: "row", gap: 16 }}>
          <Button
            onPress={() => {
              onAddTodo(enteredText);
              setEneteredText("");
            }}
            title="ADD TODO"
          />
          <Button onPress={onCancelTodo} title="Cancel" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "80%",
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default TodoInput;
