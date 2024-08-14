import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// separar os botões, adicionar tema escuro(automatico) e colocar um som quando apertar os botões

export default function App() {
  const [cookieCount, setCookieCount ] = useState(0);

  const handlePress = () => {
    setCookieCount(cookieCount + 1);
  };

  const reset = () => {
    setCookieCount(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.cookieText}>Toques: {cookieCount}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Clique Aqui</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={reset}>
        <Text style={styles.buttonText}>Resetar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  cookieText: {
    fontSize: 32,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffcc00',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 30,
    color: '#fff'
  }
})