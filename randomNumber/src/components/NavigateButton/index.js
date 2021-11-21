import React from "react";
import { TouchableOpacity, View } from "react-native";

import Style from "./style";

const NavigateButton = ({ children, onPress }) => (
    <View style={Style.navigateContent}>
        <TouchableOpacity
            onPress={onPress}
            style={Style.navigateButton}
        >
            {children}
        </TouchableOpacity>
    </View>
)

export default NavigateButton;