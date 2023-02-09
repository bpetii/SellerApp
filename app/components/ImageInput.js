import React, {useEffect} from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback, Alert} from 'react-native'
import colors from '../config/colors';
import * as ImagePicker from 'expo-image-picker';

import {MaterialCommunityIcons} from '@expo/vector-icons'

function ImageInput({imageUri, onChangeImage}) {

    useEffect(() => {
        requestPermission();
    }, [])

    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) alert("You need to enable permission to access your images")
    }

    const handlePress= () => {
        if (!imageUri) selectImage();
        else {
            Alert.alert('Delete', 'Are you sure you want to delete the image?', [
                { text: 'yes', onPress: ()=>onChangeImage(null) },
                { text: 'no' }
            ])
          }
    }

    const selectImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                quality: 1,
              });
          
              if (!result.canceled) {
                onChangeImage(result.assets[0].uri);
              }
        } catch (error) {
            console.log('Error reading an image', error)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons color={colors.medium} name='camera' size={40} />}
                {imageUri && <Image style={styles.image} source={{uri: imageUri}} />}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ImageInput;