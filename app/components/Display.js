import React, { Component } from 'react'
import { StyleSheet, TextInput, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

class Display extends Component {

    render() {
        const { screen, resault } = this.props;
        return (
            <View style={styles.dispaly_container}>
                <View style={styles.screen}>
                    <TextInput editable={false} multiline={false} maxLength={12} style={styles.screen_TextInput}>{screen}</TextInput>
                </View>
                <View style={styles.resault}>
                    <TextInput editable={false} multiline={false} style={styles.resault_TextInput}>{resault}</TextInput>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        screen: state.screen,
        resault: state.resault,
    }
}

export default connect(mapStateToProps)(Display)

const styles = StyleSheet.create({
    dispaly_container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    screen: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    resault: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    screen_TextInput: {
        color: '#000',
        fontSize: 35,
    },
    resault_TextInput: {
        color: '#999',
        fontSize: 25,
    }
});
