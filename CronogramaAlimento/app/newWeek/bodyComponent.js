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
  ListView,
  TextInput,
  ScrollView,
} from 'react-native';

import {WheelPicker, DatePicker, TimePicker} from 'react-native-wheel-picker-android'
import Hr from 'react-native-hr';
import ModalDropdown from 'react-native-modal-dropdown';

///////////////////////////LISTAS GLOBALES///////////////////////////////////
let timeFoodList=[null];
let foodList =[null];
///////////////////////////////COMPONENTE Header//////////////////////////////////////////////////
export default class BodyComponent extends Component{

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([null]),
    };
  }

  _onPressNewTimeFood = () =>{
    timeFoodList.push(<NewTimeFoodComponent/>)
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(timeFoodList)
    })
  }

  render() {
    return (
      <ScrollView style={styles.body}>
        <TouchableHighlight onPress={this._onPressNewTimeFood.bind(this)}>
          <Text style={styles.lightGreenStyle}>
              ( + ) Tiempo de Comida
          </Text>
        </TouchableHighlight>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <NewTimeFoodComponent>{rowData}</NewTimeFoodComponent>}
        />
      </ScrollView>
    );
  }
}

///////////////////COMPONENTE NewTimeFoodComponent//////////////////////////////////////////////////

class NewTimeFoodComponent extends Component{

  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([null]),
    };
  }

  onPressDelete(){

  }

  _onPressFood = () =>{
    foodList.push(<NewFoodComponent/>)
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(foodList)
    })
  }

  onTimeSelected(date){
    // do something
  }

  render() {

    let now = new Date();

    return (
      <View>
        <View style={styles.newTimeFoodStyle}>
            <TouchableHighlight style={{width:20}}
              onPress={this.onPressDelete.bind(this)}>
              <Text style={{fontSize:20, color:'red'}}>
                  X
              </Text>
            </TouchableHighlight>

            <TextInput
              style={styles.skyblueStyle}
              placeholder= {'Nuevo tiempo comida'}
            />
        </View>

        <View>
          <TimePicker
           initDate={now.toISOString()}
           onTimeSelected={(date)=>this.onTimeSelected(date)}
          />
        </View>

        <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <NewFoodComponent>{rowData}</NewFoodComponent>}
          />

          <TouchableHighlight onPress={this._onPressFood.bind(this)}>
            <Text style={styles.lightGreenStyle}>
                ( V ) alimento
            </Text>
          </TouchableHighlight>

          <Hr lineColor='#b3b3b3'/>

        </View>

      </View>
    );
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////
let cant = 1
//////////////////////////////////COMPONENTE NewFoodComponent///////////////////////////////////////
class NewFoodComponent  extends Component{
  onPressMore = () => {
    cant = cant + 1;
  }

  onPressLess = () => {
    if(cant === 1){

    }else{
      cant = cant - 1;
    }
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text>nombre de alimento</Text>

        <TouchableHighlight onPress={this.onPressMore.bind(this)}>
          <Text style={styles.lightGreenStyle}>
              ( + )
          </Text>
        </TouchableHighlight>

        <Text>{cant}</Text>

        <TouchableHighlight onPress={this.onPressLess.bind(this)}>
          <Text style={styles.lightGreenStyle}>
              ( - )
          </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  newTimeFoodStyle:{
    flexDirection: 'row',
  },
  skyblueStyle: {
  	fontSize: 20,
    textAlign: 'center',
    color: 'skyblue',
    width: 250,
  },
  lightGreenStyle: {
  	fontSize: 20,
    textAlign: 'center',
    color: 'lightgreen'
  },
  body: {
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
});

module.export='BodyComponent';
