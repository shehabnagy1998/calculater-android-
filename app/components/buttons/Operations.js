import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

const opr = ['Ac', 'Del', '/', '*', '-', '+', '%'];

class Operations extends Component {

    operPressed = (operation) => {
        const { screen, changeScreen, changeResault, changeOpr } = this.props;
        if (screen !== '0') {
            if (operation === 'Ac') {
                changeScreen('0');
                changeResault('0');
                changeOpr('');
            } else if (operation === 'Del') {
                let val = screen.toString().substring(0, screen.toString().length - 1);
                val = val.length ? val : '0';
                changeScreen(val);
            } else {
                let res = `${screen} ${operation}`;
                changeScreen('');
                changeResault(res);
                changeOpr(operation);
            }
        }
    }

    render() {

        let column = [];
        for (let i = 0; i < opr.length; i++) {
            let elem = <TouchableOpacity key={i} style={styles.oprs} onPress={() => { this.operPressed(opr[i]) }}>
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

const mapStateToProps = (state, ownProps) => {
    return {
        screen: state.screen,
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        changeScreen: (num) => { dispatch({ type: 'CHANGE_SCREEN', val: num }) },
        changeResault: (res) => { dispatch({ type: 'CHANGE_RESAULT', val: res }) },
        changeOpr: (opr) => { dispatch({ type: 'CHANGE_OPR', val: opr }) }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Operations)

const styles = StyleSheet.create({
    operations_container: {
        flex: 1,
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
