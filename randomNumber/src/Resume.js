import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import photo from './assets/luffy.jpg';

const Resume = () => {

    function handleSocialNetwork(socialNetwork) {
        switch(socialNetwork) {
            case 'linkedin':
                Alert.alert('Meu LinkedIn', 'https://www.linkedin.com/in/rodrigo-kenji-ide/');
            break;
            case 'github':
                Alert.alert('Meu GitHub', 'https://github.com/RodrigoIde42');
            break;
            case 'facebook':
                Alert.alert('Meu Facebook', 'https://www.facebook.com/rodrigokide/');
            break;
            default:
                Alert.alert('Social Networks');
            break;
        }
    }

    return (
        <>
            <View style={Style.page}>
                <View style={Style.pageHeader}>
                    <Image source={photo} style={Style.image} />
                    <Text style={Style.name}>RODRIGO IDE</Text>
                    <Text style={Style.function}>Student</Text>
                    <View style={Style.socialNetworks}>
                        <TouchableOpacity onPress={() => handleSocialNetwork('github')}>
                            <Icon name="github" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleSocialNetwork('facebook')}>
                            <Icon name="facebook" size={30} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleSocialNetwork('linkedin')}>
                            <Icon name="linkedin"size={30} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={Style.cardContainer}>
                    <View style={Style.card}>
                        <View style={Style.cardHeader}>
                            <Text style={Style.textTitle}>Education</Text>
                        </View>
                        <View style={Style.cardContent}>
                            <Text style={Style.textContent}> - Centro Universitário Eurípedes de Marília - UNIVEM</Text>
                            <Text style={Style.textContent}> - ETEC Antonio Devisate</Text>
                        </View>
                    </View>
                </View>
                <View style={Style.cardContainer}>
                    <View style={Style.card}>
                        <View style={Style.cardHeader}>
                            <Text style={Style.textTitle}>Programming Languages</Text>
                        </View>
                        <View style={Style.cardContent}>
                            <Text style={Style.textContent}> - React Native</Text>
                            <Text style={Style.textContent}> - React</Text>
                        </View>
                    </View>
                </View>

                <Button
                    title="Generate random number"
                    onPress={() => props.navigation.navigate('RandomNumber')} 
                />
            </View>    
        </>
    );
}

const Style = StyleSheet.create({
    page: {
        backgroundColor: '#A0A0A0',
        flex: 1
    },
    pageHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 125
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 10
    },
    function: {
        fontSize: 16,
        color: '#D8D8D8',
        marginBottom: 10
    },
    socialNetworks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 20
    },
    cardContainer: {
        width: '100%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width:'60%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#B7B7B7',
        padding: 10,
        backgroundColor: '#858585'
    },
    textTitle: {
        fontSize: 15,
        color: '#D8D8D8'
    },
    cardContent: {
        marginTop: 10
    },
    textContent: {
        fontSize: 12,
        color: '#C0C0C0',
        marginBottom: 10
    }
})

export default Resume;