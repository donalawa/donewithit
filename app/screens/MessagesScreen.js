import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';


import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id: '1',
        title: 'T1 testing long title title title title title title title title ',
        description: 'D1 description description description description description description ',
        image: require('../assets/mosh.jpg')
    },
    {
        id: '2',
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [ refreshing, setRefreshing ] = useState(false);

    const handleDelete = (message) => {
        // console.log('Delete', message)
        const newMessages = messages.filter((m) => m.id != message.id);
            setMessages(newMessages);
        };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={messsage => messsage.id}
                renderItem={({item}) => 
                (<View style={styles.itemContainer}>
                    <View style={styles.messageItem}>
                        <ListItem 
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message Selected",item)}
                    
                    />
                    </View>
                    <ListItemDeleteAction onPress={() => handleDelete(item)} />
                </View>
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: '2',
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/mosh.jpg')
                        }
                    ])
                }}
            />
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
    },
    messageItem:{
        width: '90%'
    }
})

export default MessagesScreen;