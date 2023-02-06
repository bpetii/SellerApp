import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup'

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen() {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
            <AppForm
                initialValues={{email:'', password: ''}}
                onSubmit={(values)=> console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="email"
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    placeholder='email'
                />
                <AppFormField
                    name="password"
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    textContentType="password"
                    secureTextEntry
                    placeholder='password'
                />
                <SubmitButton title="login" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo:{
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})

export default LoginScreen;