import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const SearchPopup = ({ isVisible, onClose, onSubmit }) => {
  const [inputText, setInputText] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleInputChange = (text) => {
    setInputText(text);
    // Clear feedback message when the user starts typing a new query
    setFeedbackMessage('');
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/securities/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: inputText }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Check if results array is empty
      if (data.results.length === 0) {
        setFeedbackMessage('No results found for your search.');
      } else {
        onSubmit(data.results); // Assuming results are passed to onSubmit function
        setFeedbackMessage(''); // Clear any previous feedback messages
      }
      
      setInputText(''); // Clear the input after submission
    } catch (error) {
      console.error('Error fetching search results:', error);
      setFeedbackMessage('Failed to fetch search results. Please try again later.');
    }
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
      {feedbackMessage ? <Text style={styles.feedbackText}>{feedbackMessage}</Text> : null}
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
    color: 'white' // Ensure text is visible on dark background
  },
  submitButton: {
    backgroundColor: 'rgb(189, 120, 2)',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
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
  feedbackText: {
    marginTop: 10,
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default SearchPopup;