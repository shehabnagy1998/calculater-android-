import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { calc2 } from '../helper';

const oper = [['Sin', 'Cos', 'Tan'], ['Sqr', '^', '( - )']];

class Operations2 extends Component {

    operationPressed = (opr) => {
        const { screen, changeScreen, changeResault, changeOpr } = this.props;
        if (screen !== '0') {
            if (opr === '^') {
                let res = `${screen} ${opr}`;
                changeOpr(opr);
                changeResault(res);
                changeScreen('');
            } else if (opr !== '( - )') {
                let res = `${opr}( ${screen} )`;
                changeOpr(opr);
                changeResault(res);
                changeScreen(calc2(screen, opr));
            }
        }
        if (opr === '( - )') {
            if (screen === '0' || screen === '')
                changeScreen('-');
        }
    }

    render() {

        let rows = [];
        for (let i = 0; i < oper.length; i++) {
            let row = [];
            for (let j = 0; j < oper[i].length; j++) {
                let elem = <TouchableOpacity key={j} style={styles.btn} onPress={() => this.operationPressed(oper[i][j])}>
                    <Text style={styles.btn_text}>{oper[i][j]}</Text>
                </TouchableOpacity>;
                row.push(elem);
            }
            rows.push(<View key={i} style={styles.row}>{row}</View>);
        }

        return (
            <View style={styles.operations2_container}>
                {rows}
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        screen: state.screen,
        resault: state.resault,
        opr: state.opr,
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        changeScreen: (num) => { dispatch({ type: 'CHANGE_SCREEN', val: num }) },
        changeResault: (res) => { dispatch({ type: 'CHANGE_RESAULT', val: res }) },
        changeOpr: (opr) => { dispatch({ type: 'CHANGE_OPR', val: opr }) }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Operations2)

const styles = StyleSheet.create({
    operations2_container: {
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    btn: {
        padding: 15,
    },
    btn_text: {
        color: '#fff',
        fontSize: 20,
    }

});
