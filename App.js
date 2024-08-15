import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useColorScheme } from 'react-native';

export default function App() {
  const [cookieCount, setCookieCount ] = useState(0);

  const handlePress = () => {
    setCookieCount(cookieCount + 1);
  };

  const reset = () => {
    setCookieCount(0);
  }

  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  const themeButton = 
      colorScheme === 'light' ? styles.lightButton : styles.darkButton;

  const themeTextButton =
      colorScheme == 'light' ? styles.lightTextButton : styles.darkTextButton;
      
  return (
      <View style={[styles.container, themeContainerStyle]}>
          <TouchableOpacity style={[styles.button, themeButton]} onPress={reset}>
            <Text style={[styles.buttonText, themeTextButton]}>Resetar</Text>
          </TouchableOpacity>
            <Text style={[styles.cookieText, themeTextStyle]}>Toques: {cookieCount}</Text>
          <TouchableOpacity style={[styles.button, themeButton]} onPress={handlePress}>
            <Text style={[styles.buttonText, themeTextButton]}>Clique Aqui</Text>
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
    padding: 20,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
  darkTextButton: {
    color: '#2A314B',
  },
  lightTextButton: {
    color: '#fff'
  },
  lightButton: {
    backgroundColor: '#2A314B',
  },
  darkButton: {
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 20,
  },
  lightContainer: {
    backgroundColor: '#f5f5f5',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#fff',
  },
})
