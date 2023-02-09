import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';

import { AppForm, AppFormField, SubmitButton, AppFormPicker } from '../components/forms';
import FormImagePicker from '../components/forms/FormImagePicker';
import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image.")
})

const categories = [
    {label: "Furniture", value: 1, backgroundColor: 'red', icon: 'apps'},
    {label: "Clothing", value: 2, backgroundColor: 'green', icon: 'email'},
    {label: "Camera", value: 3, backgroundColor: 'blue', icon: 'lock'},
];

function ListingEditScreen(props) {
   
    const location = useLocation()
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title:'',
                    price: '',
                    description: '',
                    category: null,
                    images: []
                }}
                onSubmit={(values)=> console.log(location)}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images"/>
                <AppFormField maxLength={255} name='title' placeholder="Title"/>
                <AppFormField 
                    keyboardType="numeric"
                    maxLength={8} 
                    name='price' 
                    placeholder="Price"
                    width={120}
                />
                <AppFormPicker 
                    items={categories}
                    name="category"
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                    numberOfColumns={3}
                />
                 <AppFormField 
                    maxLength={255} 
                    multiline
                    numberOfLines={3}
                    name='description' 
                    placeholder="Description"
                />
                <SubmitButton title='Post'/>
            </AppForm>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

export default ListingEditScreen;