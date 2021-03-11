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

	const renderAddButton = () => {
		return (
			<StyledButton
				style={styles.styledButton}
				title="ADD"
				onPress={() => {
					submitInput(inputText);
					setInputText("");
				}}
			/>
		);
	};

	const renderDeleteButton = () => {
		return (
			cancelButton && (
				<StyledButton
					style={styles.styledButton}
					title="CANCEL"
					color="grey"
					onPress={onCancel}
				/>
			)
		);
	};

	const cancelViewStyle = cancelButton ? styles.row : {};

	return (
		<View style={{ ...styles.container, flexDirection: flexDirection }}>
			<TextInput
				placeholder={placeholder}
				style={styles.input}
				value={inputText}
				onChangeText={changeTextHandler}
			></TextInput>

			<View style={cancelViewStyle}>
				{renderDeleteButton()}
				{renderAddButton()}
			</View>
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
	styledButton: {
		flex: 1,
		marginTop: 5,
		marginHorizontal: 2,
	},
	row: { flexDirection: "row", justifyContent: "center" },
});

export default InputButton;
