import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

import colors from '../config/colors';
import AppText from './AppText';


function OfflineNotice(props) {
    const netinfo = useNetInfo();
    // console.log(netinfo)
    if(netinfo.type !== "unknown" && netinfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <AppText style={styles.text}> No Internet Connection</AppText>
            </View>
        );
    return null;
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: 60,
        // justifyContent: 'center',
        paddingTop: 7,
        position: 'relative',
        top: Constants.statusBarHeight,
        width: '100%',
        zIndex: 1
    },
    text: {
        color: colors.white
    }
})

export default OfflineNotice;