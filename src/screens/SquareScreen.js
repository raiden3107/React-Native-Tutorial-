import React, { useReducer } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return state.red + action.payload < 0 || state.red + action.payload > 255
        ? state
        : { ...state, red: state.red + action.payload };
    case "green":
      return state.green + action.payload < 0 ||
        state.green + action.payload > 255
        ? state
        : { ...state, green: state.green + action.payload };
    case "blue":
      return state.blue + action.payload < 0 || state.blue + action.payload > 255
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const COLOR_CHANGE_FREQUENCY = 25;
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ type: "red", payload: COLOR_CHANGE_FREQUENCY })
        }
        onDecrease={() =>
          dispatch({
            type: "red",
            payload: -1 * COLOR_CHANGE_FREQUENCY,
          })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: "green", payload: COLOR_CHANGE_FREQUENCY })
        }
        onDecrease={() =>
          dispatch({
            type: "green",
            payload: -1 * COLOR_CHANGE_FREQUENCY,
          })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ type: "blue", payload: COLOR_CHANGE_FREQUENCY })
        }
        onDecrease={() =>
          dispatch({
            type: "blue",
            payload: -1 * COLOR_CHANGE_FREQUENCY,
          })
        }
      />
      <View
        style={{
          height: 100,
          width: 100,
          marginHorizontal: 132,
          marginVertical: 20,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      ></View>
    </View>
  );
};

const style = StyleSheet.create({});

export default SquareScreen;
