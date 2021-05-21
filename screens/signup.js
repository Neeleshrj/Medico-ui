import React from 'react';
import {
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
              <Text style={styles.header}>Sign Up</Text>
              <TextInput placeholder="Full Name" style={styles.input} />
              <TextInput placeholder="Email" style={styles.input} />
              <TextInput 
                placeholder="Password" 
                style={styles.input} 
                secureTextEntry={true}
              />
              <TextInput 
                placeholder="Confirm Password" 
                style={styles.input} 
                secureTextEntry={true}
              />
              <TouchableOpacity>
                <View style={styles.btnContainer}>
                  <Text
                    style={{fontSize: 20, textAlign: 'center'}}
                    onPress={() => navigation.navigate('SignUppass')}>
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
