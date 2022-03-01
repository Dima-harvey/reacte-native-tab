import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  View,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import {styles} from '~/components/Weather/styles';
import SearchInput from '~/components/SearchInput';
import Loading from '~/components/Loading';
import {fetchLocationId, fetchWeather} from '~/utils/api';
import getImageForWeather from '~/utils/getImageForWeather';


export default Weather = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState('Minsk');
  const [temperature, setTemperature] = useState(0);
  const [weather, setWeather] = useState('Clear');

  const handleUpdateLocation = async city => {
    if (!city) return;
    setLoading(true);
    try {
      const locationId = await fetchLocationId(city);
      const {location, weather, temperature} = await fetchWeather(locationId);
      setError(false);
      setLoading(false);
      setLocation(location);
      setWeather(weather);
      setTemperature(temperature);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={getImageForWeather(weather)}
        style={styles.imageContainer}
        imageStyle={styles.image}>
        <View style={styles.detailsContainer}>
          <ActivityIndicator animating={loading} color="white" size="large" />
          <Loading
            loading={loading}
            error={error}
            location={location}
            temperature={temperature}
            weather={weather}
          />
          <SearchInput
            placeholder="Search any city"
            onSubmit={city => handleUpdateLocation(city)}
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
