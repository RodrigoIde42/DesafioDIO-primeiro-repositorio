import React, { useState } from 'react';
import { Button, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const RandomNumber = () => {

    const [number, setNumber] = useState(0);

    function handleNumber() {
        const newNumber = Math.floor(Math.random() * 100);
        setNumber(newNumber);
    }

    function handleReset() {
        setNumber(0);
    }

    return (
        <SafeAreaView style={Style.container}>
            <Text style={Style.number}>{number}</Text>
            <TouchableOpacity 
                style={Style.button}
                onPress={handleNumber}
            >
                <Text>Generate number</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Style.button}
                onPress={handleReset}
            >
                <Text>Reset</Text>
            </TouchableOpacity>
            <Button
                style={Style.button}
                title="Return to Résume"
                onPress={() => props.navigation.navigate('Resume')}
            />
        </SafeAreaView>
    )
}
  
const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#20A5FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    number: {
        fontSize: 35,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
})

export default RandomNumber;