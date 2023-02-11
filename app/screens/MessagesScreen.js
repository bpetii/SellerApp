import React, { useState } from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialValues=[
    {id: 1, title: 'T1', description: 'D1', image: require('../assets/Peter.jpg')},
    {id: 2, title: 'T2', description: 'D2', image: require('../assets/Peter.jpg')},
    {id: 3, title: 'T3', description: 'D3', image: require('../assets/Peter.jpg')}
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialValues);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete= (message) => {
        setMessages(messages.filter(m => m.id !== message.id));
    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({item}) => 
                    <ListItem 
                        title={item.title} 
                        subTitle={item.description}
                        image={item.image}
                        onPress={()=> console.log(item)}
                        renderRightActions={()=> <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                    />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => setMessages([ {id: 2, title: 'T2', description: 'D2', image: require('../assets/Peter.jpg')},])}
            />
        </Screen>
    );
}

export default MessagesScreen;