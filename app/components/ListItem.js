import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from './AppText';

import colors from '../config/color'

function ListItem({title, subTitle, image}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: '100%',
        marginRight: 10
    },
    title: {
        fontWeight: '600'
    },
    subTitle: {
        color: colors.medium
    }
})

export default ListItem;