import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from './AppText';

import colors from '../config/color'

function ListItem({title, subTitle, image, IconComponent}) {
    return (
        <View style={styles.container}>
            {image && <Image style={styles.image} source={image}/>}
            {IconComponent}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: '100%',
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    title: {
        fontWeight: '600'
    },
    subTitle: {
        color: colors.medium
    }
})

export default ListItem;