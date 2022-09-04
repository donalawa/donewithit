import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeperatorComponent from '../components/ListItemSeparator'

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
        targetScreen: "Listings"
    },
    {
        title: "Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: "Messages"
    },
   
]
function AccountScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                title="Mosh Hamedani"
                subTitle="programmingwithmosh@gmail.com"
                image={require('../assets/mosh.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeperatorComponent}
                    renderItem={({item}) => 
                    <ListItem 
                       title={item.title}
                       IconComponent={
                       <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                    }
                    onPress={() => navigation.navigate(item.targetScreen)}
                    />

                }
                />
            </View>
            <ListItem 
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor="#ffe66d" />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20
    }
})
export default AccountScreen;