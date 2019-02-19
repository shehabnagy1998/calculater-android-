import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Gap extends Component {

    render() {
        return (
            <View style={styles.gap}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gap: {
        flex: 1,
        backgroundColor: '#196fe1'
    }
});
