import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const InputButton = ({ addGoalHandler }) => {
	const [enteredGoal, setEnteredGoal] = useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	return (
		<View style={styles.enterGoal}>
			<TextInput
				placeholder="Enter a goal"
				style={styles.goalInput}
				value={enteredGoal}
				onChangeText={goalInputHandler}
			></TextInput>
			<Button
				title="ADD"
				onPress={() => {
					addGoalHandler(enteredGoal);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	enterGoal: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		marginTop: 40,
		marginBottom: 10,
	},
	goalInput: {
		padding: 10,
		borderColor: "black",
		borderWidth: 0.5,
		flex: 1,
	},
});

export default InputButton;
