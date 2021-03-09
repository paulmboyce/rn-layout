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

	return (
		<View style={styles.screen}>
			<InputButton addGoalHandler={addGoalHandler} />
			<FlatList
				data={goals}
				renderItem={({ item }) => (
					<DisplayItem key={item.key} text={item.goal} />
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
