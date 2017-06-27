/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import NewWeek from './app/newWeek/newWeek';



export default class Prueba extends Component {

  	render() {
    return (
     	<View style={styles.container}>
        <NewWeek/>
     	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

AppRegistry.registerComponent('Prueba', () => Prueba);
