import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const COLOR_CHANGE_FREQUENCY = 25;

  const setColor = (color, change) => {

    switch(color){
        case 'red':
            red + change < 0 || red + change > 255 ? null : setRed(red + change)
            return
        case 'green':
            green + change < 0 || green + change > 255 ? null : setGreen(green + change)
            return
        case 'blue':
            blue + change < 0 || blue + change > 255 ? null : setBlue(blue + change)
            return
        default:
            return
    }
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor("red", COLOR_CHANGE_FREQUENCY)}
        onDecrease={() => setColor("red", -1 * COLOR_CHANGE_FREQUENCY)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor("green", COLOR_CHANGE_FREQUENCY)}
        onDecrease={() => setColor("green", -1 * COLOR_CHANGE_FREQUENCY)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor("blue", COLOR_CHANGE_FREQUENCY)}
        onDecrease={() => setColor("blue", -1 * COLOR_CHANGE_FREQUENCY)}
      />
      <View
        style={{
          height: 100,
          width: 100,
          marginHorizontal: 132,
          marginVertical: 20,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const style = StyleSheet.create({});

export default SquareScreen;
