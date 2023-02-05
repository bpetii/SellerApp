import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({children}) {
    return (
        <Text>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'tomato',
        ...Platform.select({
            ios: {
                fontSize: 18,
                fontFamily: 'Avenir'
            },
            android: {
                fontSize: 20,
                fontFamily: 'Roboto'
            }
        })
    }
})

export default AppText;