import React, {useState} from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
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


  function onSignIn() {
    setLoading(true);
    //setTimeout only added to check if loading icon works or not
    setTimeout( () => {
      return fetch('http://10.0.2.2:3000/api/auth/', {
      method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: pass,
        })
      })
      .then((response) => response.json())
      .then((json) => console.log(json.authToken))
      .then(setLoading(false),setEmail(''),setPass(''))
      .catch((error) => {
        console.log(error);
        Alert.alert('Email or Password Invalid');
      });
    }, 2000)
    
  } 

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
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
              <Text style={styles.header}>Welcome{'\n'}Back!</Text>
              <TextInput
                autoCorrect={false} 
                placeholder="Email"
                value={email}
                onChangeText={email => setEmail(email)} 
                style={styles.input} 
              /> 
              <TextInput
                autoCorrect={false} 
                placeholder="Password"
                value={pass}
                onChangeText={pass=> setPass(pass)}
                style={styles.input} 
                secureTextEntry={true}
              />
              <TouchableOpacity>
                <Text
                  style={{marginBottom: 5, fontSize: 16}}
                  onPress={() => Alert.alert('Forget password page')}>
                  Forgot Your Password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.btnContainer}>
                
                  <Text
                    style={{fontSize: 20, textAlign: 'center'}}
                    onPress={() => onSignIn()}>
                    Sign In
                  </Text>   
                </View>
              </TouchableOpacity>
              <ActivityIndicator 
                size="large" 
                animating={loading} 
                color="#ffffff" 
                style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}
              />
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
    marginBottom: 48,
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
    // flex: 1,
    // height: "10%",
    // borderColor: "#000000",
    // borderBottomWidth: 1,
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
