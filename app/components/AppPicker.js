import React, { useState } from 'react';
import { View, Button, StyleSheet, TouchableWithoutFeedback, Modal, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import { FlatList } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';


function AppPicker({ icon, items, numberOfColumns = 1, onSelectItem, PickerItemComponent = PickerItem, placeholder, selectedItem, width = "100%" }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width: width}]}>
            {icon && <MaterialCommunityIcons size={20} color={defaultStyles.colors.medium} style={styles.icon} name={icon}/>}
            {selectedItem ? (<AppText style={styles.text}>{selectedItem.label}</AppText>) : (<AppText style={styles.placeholder}>{placeholder}</AppText>)}
          
            <MaterialCommunityIcons 
                size={20}  
                color={defaultStyles.colors.medium} 
                name="chevron-down"/>
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType="slide">
            <Screen>
                <Button title="Close" onPress={() => setModalVisible(false)}/>
                <FlatList 
                data={items}
                keyExtractor={(item) => item.value.toString()}
                numColumns={numberOfColumns}
                renderItem={({ item }) => 
                    <PickerItemComponent 
                      item={item}
                      label={item.label}
                      onPress={() => {
                          setModalVisible(false);
                          onSelectItem(item);
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
        // width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center'
    },
    icon: {
        marginRight: 10
    },
    placeholder: {
        flex: 1,
        color: defaultStyles.colors.medium
    },
    text: {
        flex: 1
    },
   
})
export default AppPicker;