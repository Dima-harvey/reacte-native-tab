import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

import {styles} from '~/components/SearchInput/styles';

export default SearchInput = ({ placeholder, onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmitEditing = () => {
    if (!text) return;
    onSubmit(text);
    setText('');
  };

  const handleChangeText = text => {
    setText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        value={text}
        placeholder={placeholder}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
};
