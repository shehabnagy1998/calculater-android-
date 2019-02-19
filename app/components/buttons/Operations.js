import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const opr = ['Del', '/', '*', '-', '+'];

export default class Operations extends Component {

    render() {

        let column = [];
        for (let i = 0; i < opr.length; i++) {
            let elem = <TouchableOpacity key={i} style={styles.oprs}>
                <Text style={styles.oprs_text}>{opr[i]}</Text>
            </TouchableOpacity>;
            column.push(elem);
        }

        return (
            <View style={styles.operations_container}>
                {column}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    operations_container: {
        flex: 3,
        backgroundColor: '#636363',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    oprs: {
        padding: 30,
    },
    oprs_text: {
        color: '#fff',
        fontSize: 20,
    }
});
