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
  AsyncStorage
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useDispatch } from 'react-redux';
import { addAuthToken} from '../actions';


const SignIn = ({navigation}) => {

  async function onSignIn() {
    setLoading(true);
      fetch('https://fathomless-bayou-65608.herokuapp.com/api/auth/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: pass,
        }),
      })
        .then(response => response.json())
        .then(json => afterSignIn(json))
        .catch(error => {
          setLoading(false);
          console.log(error);
        });
  }

  const dispatch = useDispatch();

  function afterSignIn(response) {
    if (response.status == 200) {
      console.log('sign in succ');
      dispatch(addAuthToken(response.authToken,response.user_id));
      AsyncStorage.setItem('authToken', response.authToken)
      .then( () => {
        AsyncStorage.setItem('userId', response.user_id)
        .then( () => {
          setLoading(false);
          navigation.navigate('Meds');
        })
      })
    } else {
      setLoading(false);
      Alert.alert(
        'Error!', 
        response.error,
        [
          {
            text: 'Retry',
            onPress: () => console.log('retry..'),
            style: 'cancel'
          }
        ]
      );
    }
    return response;
  }

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#ff3838', '#f1f2f6']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <Text style={styles.header}>Welcome{'\n'}Back!</Text>
              <ActivityIndicator
                size="large"
                animating={loading}
                color="#ffffff"
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: hp('1%'),
                  marginBottom: hp('3%'),
                }}
              />
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
                onChangeText={pass => setPass(pass)}
                style={styles.input}
                secureTextEntry={true}
              />
              <TouchableOpacity>
                <Text
                  style={{marginBottom: hp('1%'), fontSize: hp('2.25%')}}
                  onPress={() => Alert.alert('Forget password page')}>
                  Forgot Your Password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onSignIn()}>
                <View style={styles.btnContainer}>
                  <Text style={{fontSize: hp('2.5%'), textAlign: 'center'}}>
                    Sign In
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
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
                    style={{
                      fontSize: 15,
                      textAlign: 'center',
                      color: '#1e272e',
                    }}>
                    Not Registered?
                    <Text
                      style={{color: '#ffffff'}}
                      onPress={() => navigation.navigate('SignUp')}>
                      Click Here
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>

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
    marginTop: hp('6%'),
  },
  inner: {
    padding: '8%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: hp('7.25%'),
    marginBottom: hp('1%'),
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
  },
  input: {
    fontSize: hp('2.75%'),
    borderRadius: 35,
    backgroundColor: '#f5f6fa',
    opacity: 0.7,
    padding: '5%',
    marginBottom: '5%',
    elevation: 8,
    fontFamily: 'Nunito-SemiBold',
  },
  btnContainer: {
    backgroundColor: '#ff4757',
    opacity: 0.7,
    marginTop: hp('2%'),
    borderRadius: 25,
    padding: '3%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
    elevation: 5,
    fontFamily: 'Nunito-SemiBold',
  },
});
