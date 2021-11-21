import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
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
    }
});

export default Style;