import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Display from './app/components/Display';
import Buttons from './app/components/Buttons';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './app/store/reducers/rootReducer';
import rootSaga from './app/store/sagas/rootSaga';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(rootSaga);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.main_container}>
          <Display />
          <Buttons />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
});
