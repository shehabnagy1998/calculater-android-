import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const numButtons = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ['.', 0, '=']];

export default class Numbers extends Component {

    render() {

        let rows = [];
        for (let i = 0; i < numButtons.length; i++) {
            let row = [];
            for (let j = 0; j < numButtons[i].length; j++) {
                let elem = <TouchableOpacity key={j} style={styles.btn}>
                    <Text style={styles.btn_text}>{numButtons[i][j]}</Text>
                </TouchableOpacity>;
                row.push(elem);
            }
            rows.push(<View key={i} style={styles.row}>{row}</View>);
        }

        return (
            <View style={styles.numbers_container}>
                {rows}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    numbers_container: {
        flex: 6,
        backgroundColor: '#434343',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    btn: {
        padding: 30,
    },
    btn_text: {
        color: '#fff',
        fontSize: 20,
    }
})
