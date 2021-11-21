import React from "react";
import { View, Text } from "react-native";

import Style from './style';

const Card = ({title, children}) => {
    return (
        <View style={Style.cardContainer}>
            <View style={Style.card}>
                <View>
                    <Text style={Style.textTitle}>{title}</Text>
                </View>
                <View style={Style.cardContent}>
                    {children}
                </View>
            </View>
        </View>
    )
}

export default Card;