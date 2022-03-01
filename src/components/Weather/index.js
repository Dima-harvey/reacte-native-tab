import React, {useState} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  View,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import {styles} from './styles';
import SearchInput from '~/components/SearchInput';
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
      setError(false);
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
          {!loading && (
            <View>
              {error && (
                <Text style={[styles.smallText, styles.textStyle]}>
                  Could not load weather, please try a different city.
                </Text>
              )}
              {!error && (
                <View>
                  <Text style={[styles.largeText, styles.textStyle]}>
                    {location}
                  </Text>
                  <Text style={[styles.smallText, styles.textStyle]}>
                    {weather}
                  </Text>
                  <Text style={[styles.largeText, styles.textStyle]}>
                    {`${Math.round(temperature)}°`}
                  </Text>
                </View>
              )}
              <SearchInput
                placeholder="Search any city"
                onSubmit={handleUpdateLocation}
              />
            </View>
          )}
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
