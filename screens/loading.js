import React from 'react';
import {StyleSheet, ActivityIndicator,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AsyncStorage} from 'react-native';

const Loading = ({navigation}) => {
  AsyncStorage.getItem('authToken')
    .then(token => {
      if (token == null) {
        navigation.navigate('SignIn');
      } else {
        navigation.navigate('Meds');
      }
    })
    .catch(error => console.log(error));

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['#ff3838', '#f1f2f6']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <ActivityIndicator
        size="large"
        animating={true}
        color="#ffffff"
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp('50%'),
        }}
      />
    </LinearGradient>
  );
};

export default Loading;

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
    marginTop: hp('40%'),
    padding: '18%',
    color: '#ffffff',
    fontFamily: 'Nunito-SemiBold',
  },
});
