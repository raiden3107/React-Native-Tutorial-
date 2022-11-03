import react, { useState } from "react";
import { Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)

    return(
        <>
            <Button title="Increment" onPress={() => setCounter(counter + 1)}/>
            <Button title="Decrement" onPress={() => setCounter(counter - 1)}/>
            <Text>Current Count : {counter}</Text>
        </>
    )
}

const styles = StyleSheet.create({})

export default CounterScreen