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

const isNative = Platform.OS.match(/^(IOS|ANDROID|NATIVE)$/i);
const isWeb = !isNative;

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

	const cancelHandler = () => {
		setIsAddMode(false);
	};

	const deleteGoal = (id) => {
		setGoals((current) => current.filter((goal) => goal.id !== id));
	};

	const switchAddMode = () => {
		setIsAddMode((current) => !current);
	};

	const baseInputProps = {
		submitInput: addGoalHandler,
		onCancel: cancelHandler,
		placeholder: "Enter any goal",
	};

	const renderInputFields = () => {
		if (isNative) {
			return (
				<InputButtonModal
					{...baseInputProps}
					switchAddMode={switchAddMode}
					isAddMode={isAddMode}
				/>
			);
		}
		return <InputButton {...baseInputProps} />;
	};

	return (
		<View style={styles.screen}>
			{renderInputFields()}
			<FlatList
				data={goals}
				renderItem={({ item }) => (
					<DisplayItem id={item.id} text={item.goal} onPress={deleteGoal} />
				)}
			/>
			<Text>Platform is: {Platform.OS}</Text>
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
