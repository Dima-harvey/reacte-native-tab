import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const getSurviving = time => {
  const minutes = Math.floor(time / 60);
  const secunds = time - minutes * 60;
  return {minutes: `0${minutes}`.slice(-2), secunds: `0${secunds}`.slice(-2)};
};

export default Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [survivingSecunds, setSurvivingSecunds] = useState(0);
  const {minutes, secunds} = getSurviving(survivingSecunds);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSurvivingSecunds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSurvivingSecunds(survivingsecunds => survivingSecunds + 1);
      }, 1000);
    } else if (!isActive && survivingSecunds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, survivingSecunds]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.timerText}>{`${minutes}:${secunds}`}</Text>
      <TouchableOpacity onPress={toggle} style={styles.button}>
        <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={reset}
        style={[styles.button, styles.buttonReset]}>
        <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 45,
    color: '#00FF00',
  },
  timerText: {
    color: '#fff',
    fontSize: 90,
    marginBottom: 20,
  },
  buttonReset: {
    marginTop: 20,
    borderColor: '#FF851B',
  },
  buttonTextReset: {
    color: '#FF851B',
  },
});
