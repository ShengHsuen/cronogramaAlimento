/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Dimensions,
} from 'react-native';

///////////////////COMPONENTE Footer//////////////////////////////////////////////////
export default class FooterComponent extends Component{

  _onPressCancel = () => {
    console.log("Boton cancelar tocado");
  }

  _onPressReady= () => {
    console.log("Boton listo tocado");
  }

  render() {
    return (
      <View style={styles.footer}>
          <TouchableHighlight style={styles.fullWidthButton} onPress={this._onPressCancel}>
            <Text style={styles.font}>Cancelar</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.fullWidthButton} onPress={this._onPressReady}>
            <Text style={styles.font}>Listo</Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  font: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  footer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullWidthButton:{
    backgroundColor: 'lightgreen',
    width: Dimensions.get('window').width/2,
    height: 70,
  },
});

module.export='FooterComponent';
