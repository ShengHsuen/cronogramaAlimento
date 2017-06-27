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
} from 'react-native';

import DatePicker from 'react-native-datepicker';
import Moment from 'moment';


///////////////////COMPONENTE Header//////////////////////////////////////////////////
export default class HeaderComponent extends Component{

  render() {
    return (
      <View>
        <View style={{width: 425, height: 50, backgroundColor: 'skyblue'}}>
            <Text style={styles.font}>Semana Nueva</Text>
        </View>

        <View style={styles.header}>
          <DatePickerComponent/>
        </View>
      </View>
    );
  }
}


///////////////////COMPONENTE DatePickerComponent//////////////////////////////////////////////////

class DatePickerComponent extends Component{

  constructor(props){
    super(props)
    this.state = {curTime : new Date().toLocaleString()}
  }

  render() {
    return (
      <View style={styles.datepicker}>
        <DatePicker
            style={{width: 150}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            // minDate="2016-05-01"
            // maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                marginLeft: 0
              },
            dateInput: {
                marginLeft: 36
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
       />

       <DatePicker
           style={{width: 150}}
           date={Moment(this.state.date).add(7, 'day')}
           mode="date"
           placeholder="select date"
           format="YYYY-MM-DD"
           //minDate="2016-05-01"
           //maxDate="2016-05-01"
           confirmBtnText="Confirm"
           cancelBtnText="Cancel"
           customStyles={{
             dateIcon: {
                 position: 'absolute',
                 left: 0,
                 top: 4,
               marginLeft: 0
             },
           dateInput: {
               marginLeft: 36
           }
         }}
         disabled='true'
         onDateChange={(date) => {this.setState({date: date})}}
      />
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
  datepicker: {
    justifyContent:'center',
    flexDirection: 'row',
  },
  header: {
    justifyContent:'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
});

module.export='HeaderComponent';
