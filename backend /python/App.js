import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [inputText, setInputText] = useState(''); // To store the text input by the user

  const handleSearchPress = () => {
    // Action for Search button
    console.log('Search button pressed');
  };

  const handleAddOrRemovePress = () => {
    // Action for Add or Remove button
    setIsPopupVisible(true);
    console.log('Add or Remove button pressed');
  };

  const handleViewExchangesPress = () => {
    setIsModalVisible(true); // Set the modal visibility to true when the "View Exchanges" button is pressed
    console.log('View Exchanges button pressed');
  };

  const handleCloseModalPress = () => {
    setIsModalVisible(false); // Set the modal visibility to false when the close button in the modal is pressed
    console.log('Modal closed');
  };
  const handleInputChange = (text) => {
    setInputText(text); // Update the input text state
  };

  const handleSubmit = () => {
    // Action for handling form submission, e.g., sending data to server or updating state
    console.log('Form submitted with input:', inputText);
    // Reset input text after submission
    setInputText('');
    // Close the popup modal
    setIsPopupVisible(false);
  };

  const handleClosePopup = () => {
    // Action for closing the popup modal
    setIsPopupVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Commodity and FX Exchange</Text>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.section} onPress={handleSearchPress}>
          <Text style={styles.sectionText}>Search database</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.section} onPress={handleAddOrRemovePress}>
          <Text style={styles.sectionText}>Add or Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.section} onPress={handleViewExchangesPress}>
          <Text style={styles.sectionText}>View Exchanges</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.creator}>Creator: Marcos Rivera</Text>
      <Modal visible={isModalVisible} animationType='slide'>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Modal Content</Text>
          <TouchableOpacity style={styles.closeButtonModal} onPress={handleCloseModalPress}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal> 
      {isPopupVisible && (
      <View style={styles.popupContainer}>
        <Text style={styles.popupText}>Type "add xxx" or "remove xxx" to modify the security database</Text>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          onChangeText={handleInputChange}
          value={inputText}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={handleClosePopup}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
    </View>
      )}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: 'orange',
    marginBottom: 10,
  },
  contentContainer: {
    alignItems: 'center',
  },
  section: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 30,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 24,
    color: 'orange',
  },
  creator: {
    color: 'orange',
  },
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
  }, // above is what changes the type here properties 
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  submitButton: {
    backgroundColor: 'rgb(189, 120, 2)',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonModal: {
    backgroundColor: 'rgb(18,1,1)',
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