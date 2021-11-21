import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import photo from './assets/luffy.jpg';
import NavigateButton from './components/NavigateButton';
import Card from './components/Card';

const Resume = ({ navigation }) => {

    function handleSocialNetwork(socialNetwork) {
        switch(socialNetwork) {
            case 'linkedin':
                Alert.alert('My LinkedIn', 'https://www.linkedin.com/in/rodrigo-kenji-ide/');
            break;
            case 'github':
                Alert.alert('My GitHub', 'https://github.com/RodrigoIde42');
            break;
            case 'facebook':
                Alert.alert('My Facebook', 'https://www.facebook.com/rodrigokide/');
            break;
        }
    }

    return (
        <ScrollView>
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

                <Card title="Education">
                    <Text style={Style.textContent}> - Centro Universitário Eurípedes de Marília - UNIVEM </Text>
                    <Text style={Style.textContent}> - Etec Antonio Devisate </Text>
                </Card>
                <Card title="Programming Languages">
                    <Text style={Style.textContent}> - React Native</Text>
                    <Text style={Style.textContent}> - React</Text>
                    <Text style={Style.textContent}> - JavaScript</Text>
                </Card>

                <NavigateButton 
                    onPress={() => navigation.navigate('Random Number')}
                >
                    <Text>Generate random number</Text>
                </NavigateButton>

            </View>    
        </ScrollView>
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
    textContent: {
        fontSize: 12,
        color: '#C0C0C0',
        marginBottom: 10
    }
})

export default Resume;