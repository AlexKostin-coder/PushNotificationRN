import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";


const App = () => {

  const sendMessage = async (message) => {
    PushNotification.localNotification({
      title: message.notification.title,
      message: message.notification.body,
      playSound: true,
      vibrate: true,
      vibration: 300,
      soundName: 'alarm.mp3'
    });
    console.log('message', message);
  };

  messaging().onMessage(sendMessage);
  messaging().setBackgroundMessageHandler(sendMessage);

  const getTokenPushNotification = async () => {
    const token = await messaging().getToken();
    console.log('token', token);
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <StatusBar barStyle='light-content' />
      <TouchableOpacity
        onPress={getTokenPushNotification}
        style={{
          height: 40,
          width: 150,
          backgroundColor: 'red',
          borderRadius: 10
        }}
      >
        <Text>
          123
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
