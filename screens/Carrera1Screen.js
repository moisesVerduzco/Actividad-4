import React from 'react';
import { View, Text, FlatList } from 'react-native';


const materias = [
  { id: '1', nombre: 'Matemáticas' },
  { id: '2', nombre: 'Física' },
  { id: '3', nombre: 'Química' },
  { id: '4', nombre: 'Biología' },
  { id: '5', nombre: 'Historia' },
  { id: '6', nombre: 'Geografía' },
  { id: '7', nombre: 'Literatura' },

];


const MateriaItem = ({ nombre }) => (
  <View style={{ padding: 10 }}>
    <Text>{nombre}</Text>
  </View>
);


const Carrera1Screen = () => {

  const renderItem = ({ item }) => <MateriaItem nombre={item.nombre} />;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Lista de Materias</Text>
      <FlatList
        data={materias}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Carrera1Screen;