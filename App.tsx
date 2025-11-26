import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import use from 'react';

export default function App() {

  const [count, setCount] = useState(0);
  const [frase, setFrase] =useState('Viva YO');

  useEffect(()=>{setCount(count + 2);}, []);

  return (
    <View style={styles.container}>
      
      <Text>Count: {count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)} style={styles.addButton}>
        <Text style={styles.addButtonText}>Incremento</Text>
      </TouchableOpacity> 
      <Text>Frase: {frase}</Text>
      <TouchableOpacity onPress={() => setFrase('Otra frase')} style={styles.changeButton}>
        <Text style={styles.changeButtonText}>Cambiar Frase</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
  addButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
  },  addButtonText: {
    color: 'white',
  },  
  changeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'orange',
  },  
  changeButtonText: {
    color: 'black',
  }
});
