/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import PushNotification, {Importance} from 'react-native-push-notification';
import {Button, PermissionsAndroid, Text, View} from "react-native";

class App extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){
      PushNotification.configure({
          onRegister: function (token) {
              console.log("TOKEN:", token);
          },
          onNotification: function (notification) {
              console.log("NOTIFICATION:", notification);
          },
          onAction: function (notification) {
              console.log("ACTION:", notification.action);
              console.log("NOTIFICATION:", notification);
          },
          onRegistrationError: function(err) {
              console.error(err.message, err);
          },
          senderID: "718599460128",
          popInitialNotification: true,
          requestPermissions: true,
          permissions: {
              alert: true,
              badge: true,
              sound: true
          },
      });
  }

  pushnoti(){
      PushNotification.createChannel(
          {
            channelId: "test", // (required)
            channelName: "My channel", // (required)
            channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
            playSound: true, // (optional) default: true
            soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
            importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
            vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
          },
      )
      PushNotification.localNotification({
        channelId: "test",
        title: "TEST NOTIFY",
        message: "Hello World",
      });
  }

  render(){
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin:10}}>
          <Text style={{
              textAlign: 'center',
              fontSize: 16,
              fontWeight: "bold",
              justifyContent: 'center',
              alignItems: 'center',
              margin:10}}>
              Test Noti</Text>
          <Button style={{color: 'red'}} onPress={this.pushnoti.bind(this)} title={"Push Notify"} />
        </View>
    );
  }
}
export default App;
