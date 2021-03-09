import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	StyleSheet,
	TextInput,
	Text,
	View,
	Button,
	ScrollView,
	FlatList,
} from "react-native";

import InputButton from "./components/InputButton";

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState("");
	const [goals, setGoals] = useState([]);

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		if (enteredGoal !== "") {
			setGoals((current) => [
				...current,
				{ value: enteredGoal, id: Date.now().toString() },
			]);
		}
	};

	const renderItemData = (itemData) => {
		return (
			<View style={styles.goalDisplay} key={itemData.item.id}>
				<Text>{itemData.item.value}</Text>
				<Button title="x" />
			</View>
		);
	};

	return (
		<View style={styles.screen}>
			<View style={styles.enterGoal}>
				<TextInput
					placeholder="Enter a goal"
					style={styles.goalInput}
					value={enteredGoal}
					onChangeText={goalInputHandler}
				></TextInput>
				<Button title="ADD" onPress={addGoalHandler} />
			</View>
			<FlatList data={goals} renderItem={renderItemData} />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 50,
		backgroundColor: "beige",
	},

	enterGoal: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		marginTop: 40,
	},

	goalInput: {
		padding: 10,
		borderColor: "black",
		borderWidth: 0.5,
		flex: 1,
	},

	goalDisplay: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		paddingHorizontal: 45,
		backgroundColor: "white",
		borderColor: "black",
		borderWidth: 0.5,
		marginVertical: 3,
	},
});
