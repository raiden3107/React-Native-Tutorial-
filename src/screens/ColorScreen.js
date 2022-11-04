import React, { useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import { color } from "react-native-reanimated";

const ColorScreen = () => {
  const [colors, setColor] = useState([]);
  return (
    <View>
      <Button title="Add a color" onPress={() => setColor([...colors, colorRGB()])}/>
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => (
          <View style={{ height: 100, width: 100, backgroundColor: item }}></View>
        )}
      />
    </View>
  );
};

const colorRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
}

const style = StyleSheet.create({});

export default ColorScreen;
