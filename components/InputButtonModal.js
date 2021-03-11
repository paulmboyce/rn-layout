import React from "react";
import { StyleSheet, Modal, View, Button } from "react-native";

import InputButton from "./InputButton";

const InputButtonModal = (props) => {
	console.log("PROPS: ", props);
	const { switchAddMode, isAddMode, submitInput, placeholder } = props;

	return (
		<View>
			<Button title="Add Goal" onPress={switchAddMode} />
			<Modal visible={isAddMode} animationType="slide">
				<View style={styles.modal}>
					<InputButton
						submitInput={submitInput}
						placeholder={placeholder}
						layout="column"
					/>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
	},
});

export default InputButtonModal;
