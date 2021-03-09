import React from "react";

import { View, Text, Button, FlatList, StyleSheet } from "react-native";

const ListDisplay = ({ goals }) => {
	const renderItemData = (itemData) => {
		return (
			<View style={styles.goalDisplay} key={itemData.item.id}>
				<Text>{itemData.item.value}</Text>
				<Button title="x" />
			</View>
		);
	};

	return <FlatList data={goals} renderItem={renderItemData} />;
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

export default ListDisplay;
