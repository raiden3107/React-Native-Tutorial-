import react from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const ImageDetails = ({ title, imageSource, imageScore }) => {
    return (
        <View style={styles.imageStyle}>
            <Text>{title}</Text>
            <Image source={imageSource}/>
            <Text>Image Score : {imageScore}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    imageStyle: {
        marginHorizontal: 10,
        marginVertical: 20
    }
})

export default ImageDetails