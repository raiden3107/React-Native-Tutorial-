import React from "react";
import { Text, View, StyleSheet } from 'react-native'

const LayoutScreen = () => {
    return (
        <View style={styles.parentView}>
            <View style={styles.viewOne}></View>
            <View style={styles.viewTwo}></View>
            <View style={styles.viewThree}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200,
        borderWidth: 1,
        borderColor: 'black'
    },
    viewOne: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'black',
    },
    viewTwo: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 100
    },
    viewThree: {
        height: 100,
        width: 100,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default LayoutScreen