import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import colors from '../config/color'

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {image && <Image style={styles.image} source={image}/>}
                    {IconComponent}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25}/>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: '100%',
    },
    detailsContainer: {
        flex: 1,
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