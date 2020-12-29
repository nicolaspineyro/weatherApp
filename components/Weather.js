import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const Weather = ({ APIResponse }) => {

    const { name, main } = APIResponse;
    console.log(APIResponse, 'ok');
    if (!name) return null;

    const kelvin = 273;
    return (
        <View style={styles.weather}>
            <Text style={[styles.text, styles.actual]}>{parseInt(main.temp - kelvin)}
                <Text style={styles.temp}>&#x2103;</Text>
            </Text>
            <View style={styles.temp}>
                <Text style={styles.text}>Max: {''}
                    <Text>{parseInt(main.temp_max - kelvin)} &#x2103;</Text>
                </Text>
                <Text style={styles.text}>Min: {''}
                    <Text>{parseInt(main.temp_min - kelvin)} &#x2103;</Text>
                </Text>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    weather: {
        marginBottom: 20
    },
    text: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginRight: 20
    },
    actual: {
        fontSize: 80,
        marginRight: 0,
        fontWeight: 'bold'
    },
    temp: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    temps: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default Weather;