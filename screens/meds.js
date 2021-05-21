import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  Image,
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
      <View 
        style={styles.container}
      >
          <View style={{flexDirection: 'row',flex: 1}}>
            <Icon 
                name="menu-outline"
                style={styles.tabicon}
                size={60}
            >
            </Icon>
            <View style={styles.headerbox}>
                <Text style={styles.header}>Medicine List</Text>
            </View>
          </View>

          <View style={{flex: 11,backgroundColor: 'yellow'}}>
              <View style={styles.listContainer}>
                  <Text style={styles.header}>
                      LIST
                  </Text>
              </View>
             
              <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}> 
                <Icon
                name="add-outline"
                size={60}
                style={styles.FloatingButtonStyle}
                >
                </Icon>
              
              </TouchableOpacity>
          </View> 
      </View>    
      
    </LinearGradient>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: '20%',
    backgroundColor: '#FCFCFC',
    //borderTopLeftRadius: 24,
    //borderTopRightRadius: 24,
    
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'flex-end',
  },
  tabicon: {
    flex: 0.5,
    color: '#0652DD'
    //backgroundColor: 'red'
  },
  headerbox: {
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#55E6C1',
    alignSelf: 'flex-end',
    flex: 0.5,
  },
  header: {
    fontSize: 24,
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
    //fontWeight: 'bold',
    letterSpacing: 2,
  },
  listContainer: {
    backgroundColor: 'green',
    marginLeft: 25,
    marginRight: 25,
    padding: 20,
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 30
  },
  TouchableOpacityStyle:{
    position: 'absolute',
    width: 80,
    height: 80,
    right: 30,
    bottom: 30,
  },
  FloatingButtonStyle: {
    backgroundColor: '#0652DD',
    borderRadius: 100,
    width: 80,
    height: 80,
    color: '#ffffff',
    textAlign: 'center',
    padding: 8
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
