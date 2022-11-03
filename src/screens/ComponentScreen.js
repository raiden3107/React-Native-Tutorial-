import React from "react";
import { Text, View, StyleSheet } from 'react-native'

const Component = () => {
    return (
        <View>
            <Text style={style.textStyle}>Component Screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
})

export default Component