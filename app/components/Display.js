import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Display extends Component {

    render() {
        return (
            <View style={styles.dispaly_container}>
                <View style={styles.screen}>
                    <Text style={styles.screen_text}>22+2</Text>
                </View>
                <View style={styles.resault}>
                    <Text style={styles.resault_text}>22+2</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    dispaly_container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    screen: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
        // backgroundColor: '#f00'
    },
    resault: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
        // backgroundColor: '#0f0'
    },
    screen_text: {
        color: '#000',
        fontSize: 35,
    },
    resault_text: {
        color: '#999',
        fontSize: 25,
    }
});
