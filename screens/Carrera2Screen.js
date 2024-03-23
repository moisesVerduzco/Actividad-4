import React from 'react';
import { View, Text, FlatList } from 'react-native';

// Lista de materias
const materias = [
  { id: '1', nombre: 'Algebra' },
  { id: '2', nombre: 'Física' },
  { id: '3', nombre: 'Calculo' },
  { id: '4', nombre: 'POO' },
  { id: '5', nombre: 'Invesigacion' },
  { id: '6', nombre: 'Aplicaciones Moviles' },

];


const MateriaItem = ({ nombre }) => (
  <View style={{ padding: 10 }}>
    <Text>{nombre}</Text>
  </View>
);


const Carrera2Screen = () => {

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

export default Carrera2Screen;