import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Weather from './components/Weather';
import Form from './components/Form';


const App = () => {
  const hideKeyboard = () => {
    Keyboard.dismiss();
  }
  return (
    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <View style={styles.container}>
        <Text style={styles.headline}>WeatherApp</Text>
        <Form />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4abc4',
    justifyContent: 'center'
  },
  headline: {
    fontSize: 30,
    textAlign: 'center',
    margin: '3%',
    fontWeight: 'bold',
    color: '#060930'
  }
})

export default App;
