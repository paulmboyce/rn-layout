import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const InputButton = ({ submitInput, placeholder }) => {
	const [inputText, setInputText] = useState("");

	const changeTextHandler = (enteredText) => {
		setInputText(enteredText);
	};

	return (
		<View style={styles.container}>
			<TextInput
				placeholder={placeholder}
				style={styles.input}
				value={inputText}
				onChangeText={changeTextHandler}
			></TextInput>
			<Button
				title="ADD"
				onPress={() => {
					submitInput(inputText);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		marginTop: 40,
		marginBottom: 10,
	},
	input: {
		padding: 10,
		borderColor: "black",
		borderWidth: 0.5,
		flex: 1,
	},
});

export default InputButton;
