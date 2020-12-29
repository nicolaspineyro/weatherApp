import React, { useState } from 'react';
import { Text, TextInput, View, TouchableWithoutFeedback, StyleSheet, Animated } from 'react-native';
import { Picker } from '@react-native-community/picker'


const Form = () => {
    const [buttonAnimation] = useState(new Animated.Value(1));
    const animationIn = () => {
        Animated.spring(buttonAnimation, { toValue: .8, useNativeDriver: true }).start();
    }
    const animationOut = () => {
        Animated.spring(buttonAnimation, { toValue: 1, useNativeDriver: true }).start();
    }

    const animationStyle = {
        transform: [{ scale: buttonAnimation }]
    }
    return (
        <View style={styles.container}>
            <View style={styles.cityForm}>
                <TextInput style={styles.cityFormText} placeholder='City' placeholderTextColor='#666' />
            </View>
            <View style={styles.pickerContainer}>
                <Picker itemStyle={{ textAlign: 'center' }}>
                    <Picker.Item label='-- Select --' value='' />
                    <Picker.Item label='Estados Unidos' value='US' />
                    <Picker.Item label='Argentina' value='AR' />
                    <Picker.Item label='Perú' value='PE' />
                    <Picker.Item label='Colombia' value='CO' />
                    <Picker.Item label='España' value='ES' />
                </Picker>
            </View>
            <TouchableWithoutFeedback
                onPressIn={() => animationIn()}
                onPressOut={() => animationOut()}
            >
                <Animated.View style={[styles.button, animationStyle]}>
                    <Text style={styles.buttonText}>SEARCH WEATHER</Text>
                </Animated.View>
            </TouchableWithoutFeedback>

        </View>
    );
}

const styles = StyleSheet.create({
    cityForm: {
        backgroundColor: '#fff',
        margin: '2.5%',
        borderRadius: 10
    },
    cityFormText: {
        textAlign: 'center',
        fontSize: 20
    },
    pickerContainer: {
        backgroundColor: '#fff',
        margin: '2.5%',
        borderRadius: 10
    },
    button: {
        backgroundColor: '#595b83',
        padding: '2%',
        marginVertical: '2.5%',
        marginHorizontal: '15%',
        borderRadius: 10
    },
    buttonText: {
        color: '#060930',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})


export default Form