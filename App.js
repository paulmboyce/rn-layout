import { StatusBar } from "expo-status-bar";
import React, { useState, Fragment } from "react";
import {
	StyleSheet,
	View,
	Button,
	Modal,
	FlatList,
	Platform,
	Text,
} from "react-native";

import InputButton from "./components/InputButton";
import DisplayItem from "./components/DisplayItem";
import InputButtonModal from "./components/InputButtonModal";

// MODAL for WEB:
// Modal for Web (not in current react natve web):
// SEE: https://www.npmjs.com/package/modal-react-native-web

export default function App() {
	const [goals, setGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const addGoalHandler = (enteredGoal) => {
		if (enteredGoal !== "") {
			setGoals((current) => [
				...current,
				{ goal: enteredGoal, id: Date.now().toString() },
			]);
			switchAddMode();
		}
	};

	const deleteGoal = (id) => {
		setGoals((current) => current.filter((goal) => goal.id !== id));
	};

	const switchAddMode = () => {
		setIsAddMode((current) => !current);
	};

	return (
		<View style={styles.screen}>
			{(() => {
				if (Platform.OS !== "web") {
					return (
						<InputButtonModal
							switchAddMode={switchAddMode}
							isAddMode={isAddMode}
							submitInput={addGoalHandler}
							placeholder="Enter any goal"
						/>
					);
				} else {
					return (
						<InputButton
							submitInput={addGoalHandler}
							placeholder="Enter any goal"
						/>
					);
				}
			})()}

			<FlatList
				data={goals}
				renderItem={({ item }) => (
					<DisplayItem id={item.id} text={item.goal} onPress={deleteGoal} />
				)}
			/>
			{(() => {
				if (Platform.OS !== "web") {
					return <Text>Platform is: {Platform.OS}</Text>;
				}
			})()}
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
