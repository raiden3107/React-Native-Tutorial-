import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>HomeScreen!</Text>
      <Button
        title="Go to components screen"
        onPress={() => navigation.navigate("Component")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Flat")}>
        <Text>Go to list screen</Text>
      </TouchableOpacity>

      <Button title="Go to image screen" onPress={() => navigation.navigate('Image')}/>

      <Button title="Go to counter screen" onPress={() => navigation.navigate('Counter')}/>

      <Button title="Go to color screen" onPress={() => navigation.navigate('Color')}/>
    
      <Button title="Go to square screen" onPress={() => navigation.navigate('Square')}/>

      <Button title="Go to text screen" onPress={() => navigation.navigate('Text')}/>

      <Button title="Go to layout screen" onPress={() => navigation.navigate('Layout')}/>

    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
