import React from 'react';
import {StyleSheet, Text, View} from "react-native";

export const JournalScreen = () => {
    return (
        <View style={styles.container}>
            <Text>journal</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
