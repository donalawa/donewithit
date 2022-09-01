import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import * as Location from 'expo-location';

import CategoryPickerItem from '../components/CategoryPickerItem';
import FormimagePicker from '../components/FormimagePicker';

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton
} from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().required().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select atleast one image")
});

const categories = [
        {
          backgroundColor: "#fc5c65",
          icon: "floor-lamp",
          label: "Furniture",
          value: 1,
        },
        {
          backgroundColor: "#fd9644",
          icon: "car",
          label: "Cars",
          value: 2,
        },
        {
          backgroundColor: "#fed330",
          icon: "camera",
          label: "Cameras",
          value: 3,
        },
        {
          backgroundColor: "#26de81",
          icon: "cards",
          label: "Games",
          value: 4,
        },
        {
          backgroundColor: "#2bcbba",
          icon: "shoe-heel",
          label: "Clothing",
          value: 5,
        },
        {
          backgroundColor: "#45aaf2",
          icon: "basketball",
          label: "Sports",
          value: 6,
        },
        {
          backgroundColor: "#4b7bec",
          icon: "headphones",
          label: "Movies & Music",
          value: 7,
        },
        {
          backgroundColor: "#a55eea",
          icon: "book-open-variant",
          label: "Books",
          value: 8,
        },
        {
          backgroundColor: "#778ca3",
          icon: "application",
          label: "Other",
          value: 9,
        },
]
function ListingEditScreen(props) {
  const [location, setLocation] = useState();

    const getLocation = async() => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if(!granted) return;
      const { coords: { latitude, longitude} } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });

    } 

    useEffect(() => {
      getLocation();
    }, [])

    return (
        <Screen style={styles.container}>
            <AppForm 
             initialValues={{
                 title: "",
                 price: "",
                 description: "",
                 category: null,
                 images: []
             }}
             onSubmit={(values) => console.log(location)}
             validationSchema={validationSchema}
            >
                <FormimagePicker name="images" />
                <AppFormField maxLength={255} name="title" placeholder="Title"/>
                <AppFormField 
                  keyBoardType="numeric"
                  maxLength={8}
                  name="price"
                  placeholder="Price"
                  width={120}
                />
                <AppFormPicker  
                   items={categories}
                   name="category"
                   numberOfColumns={3}
                   PickerItemComponent={CategoryPickerItem}
                   placeholder="Category"
                   width="50%"

                />
                <AppFormField 
                  maxLength={255}
                  multiline
                  name="description"
                  numberOfLines={3}
                  placeholder="Description"
                />
                <SubmitButton title="Post"/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})
export default ListingEditScreen;