import { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native';
import SearchPopup from './SearchPopup';
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [inputText, setInputText] = useState(''); // To store the text input by the user
  const [isSearchPopupVisible, setIsSearchPopupVisible] = useState(false);
  const handleSearchPress = () => {
    // Action for Search button
    setIsSearchPopupVisible(true)
    console.log('Search button pressed');
  };

  const handleSearchClose = () => {
    setIsSearchPopupVisible(false); // Set the search popup visibility to false
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

  const handleSubmit = async () => {
    try {
      // Split the input text by spaces to parse different fields
      const inputs = inputText.split(' ');
      
      // Assuming inputs are provided in the following order: name, description, price, unit
      const commodityData = {
        name: inputs[0], // First word is the commodity name
        description: inputs[1] || '', // Second word (if exists) is the description, default to empty string if not provided
        price: parseFloat(inputs[2]) || 0, // Third word (if exists) is the price, default to 0 if not provided or invalid
        unit: inputs[3] || '', // Fourth word (if exists) is the unit, default to empty string if not provided
      };
  
      const response = await fetch('http://localhost:8000/api/add_commodity/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commodityData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add commodity');
      }
  
      const data = await response.json();
      Alert.alert('Success', data.message); // Show success message from backend
      setInputText(''); // Clear input field
      setIsPopupVisible(false); // Close the popup modal
    } catch (error) {
      console.error('Error adding commodity:', error);
      Alert.alert('Error', 'Failed to add commodity. Please try again later.');
    }
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
          <Text style={styles.sectionText}> Add Security </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.section} onPress={handleViewExchangesPress}>
          <Text style={styles.sectionText}>View Exchanges</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.creator}>Creator: Marcos Rivera</Text>
      <Modal visible={isSearchPopupVisible} transparent={true} animationType='slide'>
        <View style={styles.popupContainer}>
          <SearchPopup onClose={handleSearchClose}/> {/* Add the SearchPopup component */}
        </View>
      </Modal>
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
    backgroundColor: 'rgb(108,1,1)',
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