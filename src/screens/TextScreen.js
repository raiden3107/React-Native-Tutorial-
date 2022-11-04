import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        value={username}
        onChangeText={(newValue) => setUsername(newValue)}
      />
      <Text>Username is {username}</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      <Text>password is {password}</Text>
      {
        username && password.length < 6 && <Text style={styles.error}>Password should be greater than 5 characters</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    error: {
        marginVertical: 20,
        color: 'red'
    }
});

export default TextScreen;
