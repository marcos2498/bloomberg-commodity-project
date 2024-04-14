import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const SearchPopup = ({ isVisible, onClose, onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleSubmit = () => {
    onSubmit(inputText);
    setInputText('');
  };

  return (
    <View style={styles.popupContainer}>
      <Text style={styles.popupText}>Type your search query</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        onChangeText={handleInputChange}
        value={inputText}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    backgroundColor: 'rgb(33, 33, 33)',
    padding: 40,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  popupText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'orange'
  },
  input: {
    backgroundColor: 'rgb(94, 94, 94)',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'rgb(189, 120, 2)',
    padding: 10,
    borderRadius: 5,
  },
  closeButton: {
    backgroundColor: 'rgb(148,1,1)',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SearchPopup;