import React from 'react';
import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const SignIn = ({navigation}) => {

  function onSignUp() {
    setTimeout( () => {
      return fetch('http://10.0.2.2:3000/api/users/', {
      method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullname: name, 
          email: email,
          password: password,
        })
      })
      .then( (response) => {
        if(!response.ok){
          console.log(response);
        }
        return response;
      })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => {
        console.log(error);
        
      });
    }, 2000)
  }


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [cpass, setCPass] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#FF0000', '#6284FF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <Text style={styles.header}>Sign Up</Text>
              <ActivityIndicator 
                size="large" 
                animating={loading} 
                color="#ffffff" 
                style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10}}
              />
              <TextInput 
                value={name}
                onChangeText={name => setName(name)}
                placeholder="Full Name" 
                style={styles.input} 
              />
              <TextInput 
                placeholder="Email" 
                style={styles.input} 
                value={email}
                onChangeText={email => setEmail(email)}
              />
              <TextInput 
                placeholder="Password" 
                style={styles.input} 
                secureTextEntry={true}
                value={password}
                onChangeText={password => setPass(password)}
              />
              <TextInput 
                placeholder="Confirm Password" 
                style={styles.input} 
                secureTextEntry={true}
                value={cpass}
                onChangeText={cpass => setCPass(cpass)}
              />
              <TouchableOpacity>
                <View style={styles.btnContainer}>
                  <Text
                    style={{fontSize: 20, textAlign: 'center'}}
                    onPress={() => onSignUp()}>
                    Sign Up
                  </Text>
                </View>
              </TouchableOpacity>
              
              <View
                style={[
                  styles.btnContainer,
                  {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    elevation: 0,
                  },
                ]}>
                <Text 
                  style={{fontSize: 15, textAlign: 'center'}}
                  
                >
                  Already Registered?
                  <Text 
                    style={{color: "#ffffff"}}
                    onPress={() => navigation.navigate('SignIn')}
                  >
                    Sign In
                  </Text>
                </Text>
              </View>
              <View style={{flex: 1}} />
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '15%',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: 54,
    marginBottom: 10,
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
  },
  input: {
    fontSize: 22,
    borderRadius: 35,
    backgroundColor: '#f5f6fa',
    opacity: 0.7,
    padding: '5%',
    marginBottom: 20,
    elevation: 8,
    fontFamily: 'Nunito-SemiBold',
  },
  btnContainer: {
    backgroundColor: '#ff4757',
    opacity: 0.7,
    marginTop: 12,
    borderRadius: 25,
    padding: '3%',
    width: '100%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
    elevation: 5,
    fontFamily: 'Nunito-SemiBold',
  },
});
