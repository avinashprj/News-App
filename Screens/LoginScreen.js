import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { setAuthUser } from '../features';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { darkTheme } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  function onSubmit() {
    if (email.toLowerCase() === 'avinash@gmail.com' && password === '123') {
      dispatch(setAuthUser(true));
      navigation.navigate('Home');
    }
  }

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? '#282C35' : 'white',
      }}
    >
      <Text style={{ ...styles.text, color: darkTheme ? 'white' : 'black' }}>
        LOGIN
      </Text>
      <StatusBar />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(mail) => setEmail(mail)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry
          onChangeText={(pass) => setPassword(pass)}
        />
      </View>

      <TouchableOpacity onPress={onSubmit} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 25,
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#dcdada',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    width: '100%',
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
});
