import React from "react";

import { View, Text, Button, FlatList, StyleSheet } from "react-native";

const DisplayItem = ({ key, text }) => {
	return (
		<View style={styles.goalDisplay} key={key}>
			<Text>{text}</Text>
			<Button title="x" />
		</View>
	);
};

const styles = StyleSheet.create({
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

export default DisplayItem;
