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
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
          <View style={{flexDirection: 'row'}}>
            <View style={styles.tabiconBox}>
              <Icon 
                  name="menu-outline"
                  style={styles.tabicon}
                  size={60}
              >
              </Icon>
            </View>
            <View style={styles.headerbox}>
              <Text style={styles.header}>Medicine List</Text>
            </View>
          </View>
          <ScrollView style={{flex: 1,backgroundColor: 'yellow'}}>
              <View style={styles.listContainer}>
                  <Text>
                      LIST
                  </Text>
              </View> 
          </ScrollView>
          <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}> 
                <Icon
                name="add-outline"
                size={60}
                style={styles.FloatingButtonStyle}
                >
                </Icon>
          </TouchableOpacity>
           
      </View>    
      
    </LinearGradient>
  );
};

export default SignIn;

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
  listContainer: {
    backgroundColor: 'green',
    marginLeft: wp('6%'),
    marginRight: wp('6%'),
    padding: 20,
    alignItems: 'center',
    marginTop: hp('4%'),
    borderRadius: 20,
    elevation: 8,
  },
  TouchableOpacityStyle:{
    position: 'absolute',
    width: wp('18.5%'),
    height: hp('10.75%'),
    right: wp('8%'),
    bottom: hp('4%'),
  },
  FloatingButtonStyle: {
    backgroundColor: '#0652DD',
    borderRadius: 100,
    width: wp('18.5%'),
    height: hp('10.75%'),
    color: '#ffffff',
    textAlign: 'center',
    padding: 8
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
