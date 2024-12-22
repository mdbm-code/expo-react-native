import { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal, Image } from 'react-native';



function GoalInput({ addGoalHandler, modalVisible, endAddGoal }) {
	//states
	const [enteredText, setEnteredText] = useState('');

	//functions
	function goalInputHandler(text) {
		setEnteredText(text);
	}

	function buttonHandler() {
		addGoalHandler(enteredText);
		setEnteredText('');
	}


	return (
		<Modal visible={modalVisible} animationType='slide'>
			<View style={styles.inputContainer}>
				<Image source={require('../assets/favicon.png')} style={styles.image} />
				<TextInput placeholder='Цель' style={styles.textInput} value={enteredText} onChangeText={goalInputHandler} />
				<View style={styles.buttonContainer}>
					<View>
						<Button title='Отмена' onPress={endAddGoal} color={'#f31282'} />
					</View>
					<View style={styles.button}>
						<Button title='Добавить' onPress={buttonHandler} color={'#b180f0'} />
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'сolumn',
		justifyContent: 'start',
		alignItems: 'center',
		padding: 16,
		backgroundColor: '#311b6b',
	},
	image: {
		width: 100,
		height: 100,
		marginBottom: 20,
		marginTop: 20,
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		width: '100%',

		color: '#120438',
		borderRadius: 6,
		padding: 16
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 16,
	},
	button: {
		width: '40%',
		marginHorizontal: 8,

	}
});
