import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import Weather from './components/Weather';
import Form from './components/Form';


const App = () => {


  const [search, setSearch] = useState({
    city: '',
    country: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [consultAPI, setConsultAPI] = useState(false);
  const [APIResponse, setAPIResponse] = useState({});

  const hideKeyboard = () => {
    Keyboard.dismiss();
  }

  useEffect(() => {
    if (consultAPI) {
      APICall();
    }
  }, [consultAPI]);

  const APICall = async () => {
    const { city, country } = search;
    const appID = '21cd181593a051d2fd09294e35d00013'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appID}`
    try {
      setIsLoading(true);
      const APIResponse = await fetch(url);
      const result = await APIResponse.json();
      setAPIResponse(result)
      setConsultAPI(false)
      setIsLoading(false);
      if (result.cod !== 200) {
        Alert.alert('Error', 'Invalid city or country.', [{
          text: 'Ok'
        }]);
      }
    }
    catch (error) {
      console.log('error')
      setIsLoading(false);
      Alert.alert('Error', 'Invalid city or country.', [{
        text: 'Ok'
      }]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <View style={styles.container}>
        <Text style={styles.headline}>WeatherApp</Text>
        <Weather
          APIResponse={APIResponse}
        />
        <Form
          search={search}
          setSearch={setSearch}
          setConsultAPI={setConsultAPI}
        />
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
