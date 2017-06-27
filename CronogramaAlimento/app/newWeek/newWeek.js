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

import HeaderComponent from './headerComponent';
import BodyComponent from './bodyComponent';
import FooterComponent from './footerComponent';



export default class NewWeek extends Component {

  	render() {
    return (
     	<View style={styles.container}>
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
     	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
});

AppRegistry.registerComponent('NewWeek', () => NewWeek);

module.export='NewWeek';
