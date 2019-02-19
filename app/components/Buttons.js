import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Numbers from './buttons/Numbers';
import Operations from './buttons/Operations';
import Gap from './buttons/Gap';

export default class Buttons extends Component {

    render() {
        return (
            <View style={styles.buttons_container}>
                <Numbers />
                <Operations />
                <Gap />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttons_container: {
        flex: 2,
        flexDirection: 'row',
    }
});
