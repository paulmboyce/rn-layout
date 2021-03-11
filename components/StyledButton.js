import React from "react";
import { View, Button } from "react-native";

const StyledButton = (props) => {
	const { style, title, onPress, color } = props;

	return (
		<View style={{ ...style }}>
			<Button title={title} onPress={onPress} color={color} />
		</View>
	);
};

export default StyledButton;
