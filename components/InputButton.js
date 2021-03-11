import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Dimensions } from "react-native";

const InputButton = ({ submitInput, placeholder, layout }) => {
	const [inputText, setInputText] = useState("");

	const flexDirection = layout ? layout : "row";

	const changeTextHandler = (enteredText) => {
		setInputText(enteredText);
	};

	return (
		<View style={{ ...styles.container, flexDirection: flexDirection }}>
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
		justifyContent: "center",
		marginTop: 40,
		marginBottom: 10,
	},
	input: {
		padding: 10,
		borderColor: "black",
		borderWidth: 0.5,
		minWidth: Dimensions.get("window").width * 0.6,
	},
});

export default InputButton;
