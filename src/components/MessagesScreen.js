import React from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { newMessages } from '../core/messages/messages.actions';
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";

export const MessagesScreen = () => {

	const dispatch = useDispatch();

	const sendMessage = async (message) => {
		await dispatch(newMessages(message));
		PushNotification.localNotification({
			title: message.notification.title,
			message: message.notification.body,
			playSound: true,
			vibrate: true,
			vibration: 300,
			soundName: 'alarm.mp3'
		});
	};

	messaging().onMessage(sendMessage);
	messaging().setBackgroundMessageHandler(sendMessage);

	const getTokenPushNotification = async () => {
		const token = await messaging().getToken();
		console.log('token', token);
	}


	return (
		<SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
			<TouchableOpacity
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
	)
}

export default MessagesScreen;