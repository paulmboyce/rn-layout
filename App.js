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
import DisplayItem from "./components/DisplayItem";

export default function App() {
	const [goals, setGoals] = useState([]);

	const addGoalHandler = (enteredGoal) => {
		if (enteredGoal !== "") {
			setGoals((current) => [
				...current,
				{ goal: enteredGoal, id: Date.now().toString() },
			]);
		}
	};

	const deleteGoal = (id) => {
		setGoals((current) => current.filter((goal) => goal.id !== id));
	};

	return (
		<View style={styles.screen}>
			<InputButton submitInput={addGoalHandler} placeholder="Enter any goal" />
			<FlatList
				data={goals}
				renderItem={({ item }) => (
					<DisplayItem id={item.id} text={item.goal} onPress={deleteGoal} />
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 50,
		backgroundColor: "beige",
	},
});
