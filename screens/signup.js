import React,{useState} from 'react';
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
  ScrollView,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const SignIn = ({navigation}) => {

  async function onSignUp() {
    setLoading(true);
    
    fetch('https://fathomless-bayou-65608.herokuapp.com/api/users/', {
    method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullname: name, 
        email: email,
        password: password,
        cPassword: cpass,
      })
    })
    .then( (response) => response.json())
    .then((json) => afterSignUp(json))
    .then(setLoading(false))
    .catch((error) => {
      console.log(error);
    });
    
  }

  async function afterSignUp(response)
  {
    if(response.status == 200){
      Alert.alert('Signed Up!');
    }
    else{
      Alert.alert("Error!",response.error);
    }
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [cpass, setCPass] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#ff3838', '#f1f2f6']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <ScrollView>
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
                style={{justifyContent: 'center', alignItems: 'center', marginBottom: hp('2%'), marginTop: hp('2%')}}
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
              <TouchableOpacity
                onPress={() => {onSignUp()}}
              >
                <View style={styles.btnContainer}>
                  <Text
                    style={{fontSize: hp('2.5%'), textAlign: 'center'}}
                    >
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
                  style={{fontSize: hp('2%'), textAlign: 'center'}}
                  
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
      </ScrollView>
    </LinearGradient>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp('7%'),
  },
  inner: {
    padding: '8%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    fontSize: hp('7.25%'),
    marginBottom: hp('0.05%'),
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
  },
  input: {
    fontSize: hp('2.75%'),
    borderRadius: 35,
    backgroundColor: '#f5f6fa',
    opacity: 0.7,
    padding: '5%',
    marginBottom: hp('2.5%'),
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
