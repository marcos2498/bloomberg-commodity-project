import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSearchPress = () => {
    // Action for Search button
    console.log('Search button pressed');
  };

  const handleAddOrRemovePress = () => {
    // Action for Add or Remove button
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
          <TouchableOpacity style={styles.closeButton} onPress={handleCloseModalPress}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});