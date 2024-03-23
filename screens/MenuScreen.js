import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import MenuItem from '../components/Menu/MenuItem';
import carrera1Image from '../assets/descarga.png';
import carrera2Image from '../assets/descarga.png';

    const MenuScreen = ({ navigation }) => {
        const handleCarrera1Press = () => {
            navigation.navigate('Carrera 1')
        };
      
        const handleCarrera2Press = () => {
            navigation.navigate('Carrera 2')
        };
      
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.menuRow}>
          <MenuItem
            icon={carrera1Image}
            label="Carrera 1"
            onPress={handleCarrera1Press}
          />
          <MenuItem
            icon={carrera2Image}
            label="Carrera 2"
            onPress={handleCarrera2Press}
          />
        </View>
        
      </ScrollView>
    );
  };
const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: '#f0f0f0', // Coloca el color adecuado del fondo
    },
    menuRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20, // Ajustar el margen según sea necesario
    },
});
export default MenuScreen;





