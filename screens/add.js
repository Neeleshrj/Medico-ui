import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import meds from './meds';

const AddMeds = ({AuthToken,navigation}) => {
  const [inputs, setInputs] = useState([{key: '', value: ''}]);
  const [disName, setName] = useState('');

  const sendData = () => {
    let medArr = []
    inputs.forEach(element => {
      medArr.push(element.value);
    });
    console.log(medArr);
    fetch('http://10.0.2.2:3000/api/diseases/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-auth-token': AuthToken[0],
        },
        body: JSON.stringify({
          user: AuthToken[1],
          name: disName,
          medicine: medArr,
        }),
      })
      .then(res => res.json())
      .then((data) => {onSubmit(data)})
      .catch(error => {
        console.log(error);
      });
  }

  const onSubmit = (data) => {
    if (data.status == 200){
      Alert.alert(data.message);
      setInputs([{key: '', value: ''}]);
      setName('');
    }
    else{
      Alert.alert(data.error);
    }
  }


  const addHandler = () => {
    const _inputs = [...inputs];
    _inputs.push({key: '', value: ''});
    setInputs(_inputs);
  };

  const deleteHandler = key => {
    const _inputs = inputs.filter((input, index) => index != key);
    setInputs(_inputs);
  };

  const inputHandler = (text, key) => {
    const _inputs = [...inputs];
    _inputs[key].value = text;
    _inputs[key].key = key;
    setInputs(_inputs);
  };


  const _userLogout = () => {
    AsyncStorage.removeItem('authToken')
    .then( () => {
      AsyncStorage.removeItem('userId')
      .then( () => {
        navigation.navigate('SignIn');
      })
      .catch( error => console.log(error));
    })
    .catch( error => console.log(error));  
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.tabiconBox}>
        <TouchableOpacity
              onPress={ () => _userLogout()}
            >
              <View style={styles.tabiconBox}>
                <Icon 
                    name="log-out-outline"
                    style={styles.tabicon}
                    size={50}
                >
                </Icon>
              </View>
            </TouchableOpacity>
        </View>
        <View style={styles.headerbox}>
          <Text style={styles.header}>Add Disease</Text>
        </View>
      </View>
      <View style={{flex: 1,backgroundColor: '#ecf0f1'}}>
        <View style={styles.btnContainer}>
          <TouchableWithoutFeedback  onPress={() => addHandler()}>
            <View style={styles.addButton}>
              <Icon 
              name="add-outline" 
              size={34}></Icon>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={ () => {sendData();Keyboard.dismiss}}>
            <View style={[styles.addButton,{backgroundColor: '#3498db'}]} >
                <Icon 
                name="checkmark-outline" 
                size={34}></Icon>   
            </View>
            
          </TouchableWithoutFeedback>
        </View>
        <TextInput
          autoCorrect={false}
          style={[styles.input, {marginTop: hp('4%')}]}
          placeholder="Disease Name"
          value={disName}
          onChangeText={disName => setName(disName)}
        />

        <ScrollView>
          {inputs.map((input, key) => (
            <View key={key} style={styles.inputContainer}>
              <TextInput
                autoCorrect={false}
                style={[styles.inputMed,{flex: 4}]}
                placeholder="Medicine Name"
                value={input.value}
                onChangeText={(text) => inputHandler(text, key)}
              />
              <TouchableWithoutFeedback
                onPress = {()=> deleteHandler(key)}
              >
              <View style={styles.delButton}>
                <Icon
                  name="remove-outline"
                  size={34}
                  style={{color: 'red'}}
                >
                </Icon>

              </View>
              </TouchableWithoutFeedback>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    AuthToken: state.AuthToken,
  }
}



export default connect(mapStateToProps)(AddMeds);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-end',
  },
  tabiconBox: {
    flex: 1,
  },
  tabicon: {
    marginTop: hp('2%'),
    color: '#3498db',
  },
  headerbox: {
    flex: 2,
    alignItems: 'flex-end',
    padding: 20,
    alignSelf: 'flex-end',
  },
  header: {
    fontSize: hp('4%'),
    color: '#7f8c8d',
    fontFamily: 'Nunito-SemiBold',
    letterSpacing: 4,
    //fontWeight: 'bold',
  },
  input: {
    fontSize: hp('2.75%'),
    borderRadius: 20,
    backgroundColor: '#f5f6fa',
    padding: '5%',
    marginTop: hp('2%'),
    marginBottom: hp('1%'),
    marginHorizontal: wp('4%'),
    elevation: 8,
    fontFamily: 'Nunito-SemiBold',
  },
  inputMed: {
    fontSize: hp('2.75%'),
    borderRadius: 20,
    backgroundColor: '#f5f6fa',
    padding: '5%',
    marginTop: hp('1%'),
    marginBottom: hp('1%'),
    marginHorizontal: wp('4%'),
    elevation: 8,
    fontFamily: 'Nunito-SemiBold',
  },
  btnContainer: {
    marginTop: hp('4%'),
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'Nunito-SemiBold',
    alignItems: 'center',
    flexDirection: 'row',
  },
  addButton: {
    backgroundColor: '#2ecc71',
    color: 'white',
    padding: '2%',
    borderRadius: hp('8%') / 2,
    marginVertical: hp('1%'),
    marginHorizontal: wp('5%'),
    textAlign: 'center',
  },
  delButton: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('1%'),
    marginRight: wp('2%'),
    textAlign: 'center',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
  }
});
