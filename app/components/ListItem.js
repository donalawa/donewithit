import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight  } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable  from 'react-native-gesture-handler/Swipeable'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItem({title, subTitle, image, IconComponent: IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}
                >
                    <View style={styles.container}>
                        {IconComponent}
                        {image && <Image style={styles.image} source={image} />}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                            {subTitle && <AppText numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>}
                        </View>
                        <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25} />
                    </View>
                </TouchableHighlight>
        </Swipeable>
    );
}


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: '500'
    }
})

export default ListItem;