import React from 'react';
import {Text, View} from 'react-native';

import {styles} from '~/components/Loading/styles';

export default Loading = ({ loading, error, weather, temperature, location }) => {

  return (
    <View>
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
        </View>
      )}
    </View>
  );
};
