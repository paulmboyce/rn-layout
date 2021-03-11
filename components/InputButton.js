import React, { useState } from "react";
import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Dimensions,
	Platform,
} from "react-native";

import StyledButton from "./StyledButton";

const InputButton = (props) => {
	const { submitInput, placeholder, layout, cancel, onCancel } = props;
	const [inputText, setInputText] = useState("");

	const flexDirection = layout ? layout : "row";
	const cancelButton = cancel ? cancel : false;

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
			<StyledButton
				style={{ marginTop: 5 }}
				title="ADD"
				onPress={() => {
					submitInput(inputText);
					setInputText("");
				}}
			/>
			{(() => {
				if (cancelButton) {
					return (
						<StyledButton
							style={{ marginTop: 5 }}
							title="CANCEL"
							color="grey"
							onPress={onCancel}
						/>
					);
				}
			})()}
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
