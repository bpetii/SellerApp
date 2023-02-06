import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppText from '../components/AppText';

import defaultStyles from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({icon, items, placeholder, onSelectItem, selectedItem}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.medium}/>}
                    {selectedItem? (
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                    ) : ( 
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    )}
                    <MaterialCommunityIcons style={styles.icon} name='chevron-down' size={20} color={defaultStyles.colors.medium}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title='Close' onPress={()=> setModalVisible(false)}/>
                    <FlatList 
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({item}) => 
                            <PickerItem 
                                label={item.label} 
                                onPress={()=> {
                                    setModalVisible(false)
                                    onSelectItem(item)

                                }}
                            />
                    }
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    },
    placeholder: {
        flex: 1,
        color: defaultStyles.colors.medium
    }
})

export default AppPicker;