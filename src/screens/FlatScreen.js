import React from "react";
import { Text, StyleSheet, FlatList } from 'react-native'

const FlatScreen = () => {
    const friends = [
        { name: 'friend#1', age: 20},
        { name: 'friend#2', age: 30},
        { name: 'friend#3', age: 25},
        { name: 'friend#4', age: 21},
        { name: 'friend#5', age: 76},
        { name: 'friend#6', age: 35},
        { name: 'friend#7', age: 11},
    ]

    return (
        <FlatList 
            data={friends}
            renderItem={({ item }) => {
                return <Text style={style.textStyle}>{item.name + ' - Age ' + item.age}</Text>
            }}
        />
    )
}

const style = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 10
    }
})

export default FlatScreen