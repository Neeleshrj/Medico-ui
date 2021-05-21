import React from 'react';
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
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const SignIn = ({navigation}) => {
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
              <TextInput placeholder="Email" style={styles.input} /> 
              <TextInput 
                placeholder="Password"
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
                    onPress={() => Alert.alert('Sign In')}>
                    Sign In
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
                <Text style={{fontSize: 15, textAlign: 'center'}}>
                  Or Sign In using
                </Text>
              </View>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    padding: 5,
                  }}>
                  <View
                    style={[
                      styles.btnContainer,
                      {width: '40%', backgroundColor: '#ffffff'},
                    ]}>
                    <View
                      style={{justiftyContent: 'center', alignItems: 'center'}}>
                      <Icon
                        name="logo-google"
                        size={20}
                        onPress={() =>
                          Alert.alert('Login using Google')
                        }></Icon>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.btnContainer,
                      {width: '40%', backgroundColor: '#ffffff'},
                    ]}>
                    <View
                      style={{justiftyContent: 'center', alignItems: 'center'}}>
                      <Icon
                        name="logo-facebook"
                        style={styles.icon}
                        size={20}
                        onPress={() =>
                          Alert.alert('Login using Google')
                        }></Icon>
                    </View>
                  </View>
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
                    style={{fontSize: 15, textAlign: 'center',color: "#1e272e"}}    
                  >
                    
                    Not Registered? 
                      <Text 
                        style={{color: "#ffffff"}}
                        onPress={()=>navigation.navigate('SignUp')}
                      >
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
    marginTop: '15%',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: 64,
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
