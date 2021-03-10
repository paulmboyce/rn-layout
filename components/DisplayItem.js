import React from "react";

import {
	View,
	Text,
	Button,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

const DisplayItem = ({ id, text, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress.bind(this, id)}>
			<View style={styles.goalDisplay} key={id}>
				<Text>{text}</Text>
			</View>
		</TouchableOpacity>
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
		minHeight: 40,
	},
});

export default DisplayItem;
