import React, { useEffect } from 'react';
import { View, Image, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors';

function Imageinput({ imageUri, onChangeImage }) {
    
    useEffect(() => {
        requestPermission();
    },[])

    const requestPermission = async() => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        // const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
        if(!granted) {
            alert("You need to enable permision to access the library")
        }
    }

    const handlePress = () => {
        if(!imageUri) selectImage();
        else Alert.alert("Delete", 'Are you sure you want to delete this image ?', [
            { text: 'Yes', onPress: () => onChangeImage(null)},
            { text: 'No' }
        ])
    }


    const selectImage = async () => {

        try {
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.5
          });

          if(!result.cancelled) {
              
            onChangeImage(result.uri);
          }
        } catch (error) {
          console.log('Error Reading an image',error)
        }
      }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={colors.medium}/>}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image}/>}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        width: 100,
        overflow: 'hidden'
    },

    image: {
        height: '100%',
        width: '100%'
    }

})

export default Imageinput;