import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { calc } from '../helper';
import Operations2 from './Operations2';

const numButtons = [[7, 8, 9], [4, 5, 6], [1, 2, 3], ['.', 0, '=']];

class Numbers extends Component {

    numberPressed = (num) => {
        const { screen, resault, opr, changeScreen, changeResault } = this.props;
        if (num === '.') {
            if (screen.indexOf('.') === -1) {
                let val = screen === '0' ? num : screen + num;
                this.props.changeScreen(val)
            }
        } else if (num === '=') {
            let res = (resault.split(' '))[0];
            changeResault(`${resault} ${screen}`);
            changeScreen(calc(res, screen, opr));
        } else {
            let val = screen === '0' ? num : screen.toString() + num;
            this.props.changeScreen(val)
        }
    }

    render() {

        let rows = [];
        for (let i = 0; i < numButtons.length; i++) {
            let row = [];
            for (let j = 0; j < numButtons[i].length; j++) {
                let elem = <TouchableOpacity key={j} style={styles.btn} onPress={() => this.numberPressed(numButtons[i][j])}>
                    <Text style={styles.btn_text}>{numButtons[i][j]}</Text>
                </TouchableOpacity>;
                row.push(elem);
            }
            rows.push(<View key={i} style={styles.row}>{row}</View>);
        }

        return (
            <View style={styles.numbers_main_container}>
                <Operations2 />
                <View style={styles.numbers_container}>
                    {rows}
                </View>
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
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Numbers)

const styles = StyleSheet.create({

    numbers_main_container: {
        flex: 3,
        backgroundColor: '#434343',
    },
    numbers_container: {
        flex: 4,
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
