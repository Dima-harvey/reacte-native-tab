import React, {useState, useEffect} from 'react';
import {Text, View, StatusBar, TouchableOpacity} from 'react-native';

import {styles} from '~/components/Timer/styles';
import getSurviving from '~/utils/formater';

export default Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [survivingSecunds, setSurvivingSecunds] = useState(0);
  const {minutes, secunds} = getSurviving(survivingSecunds);

  const handlePressToggle = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setSurvivingSecunds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSurvivingSecunds(survivingSecunds => survivingSecunds + 1);
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
      <TouchableOpacity onPress={() => handlePressToggle()} style={styles.button}>
        <Text style={styles.buttonText}>{isActive ? 'Pause' : 'Start'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleReset()}
        style={[styles.button, styles.buttonReset]}>
        <Text style={[styles.buttonText, styles.buttonTextReset]}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};
