import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TouchableWithoutFeedback,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { connect, useDispatch } from 'react-redux';
import { selectDisease } from '../actions';


const Meds = ({MedList,selectDiseaseId,navigation}) => {

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const dispatch = useDispatch();

  function componentWillUpdate() {
    LayoutAnimation.spring();
  }

  function renderMedicine(id, description) {
    if ( id == selectDiseaseId){
      return (
        <View>
          { description.map((item, key) => (
              <Text key={key} style={styles.Medicines}>
                ○ {item}
              </Text>   
            )) 
          }
        </View>        
      )
    }
  }

  function renderList(medlist) {
    return(
      <TouchableWithoutFeedback
        onPress={ () => {dispatch(selectDisease(medlist.item._id));componentWillUpdate()} }
      >
        <View style={styles.listContainer}>
          <Text style={styles.disName}>
            {medlist.item.name}
          </Text>
            {renderMedicine(medlist.item._id, medlist.item.medicine)}    
      </View>
      </TouchableWithoutFeedback>
      
    );   
  }

  
  return (
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
          <TouchableWithoutFeedback>
            <View style={{flex: 1,backgroundColor: '#ecf0f1'}}>

                <FlatList 
                  data={MedList}
                  renderItem={renderList}
                  keyExtractor={ (medlist) => medlist._id}
                >
                </FlatList> 

            </View>
          </TouchableWithoutFeedback>
          
          <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle}> 
                <Icon
                name="add-outline"
                size={60}
                style={styles.FloatingButtonStyle}
                >
                </Icon>
          </TouchableOpacity>
           
      </View>
  );
};

const  mapStateToProps = (state) =>{
  return {
     MedList: state.MedList,
     selectDiseaseId: state.selectedDiseaseId
  };
}

export default connect(mapStateToProps)(Meds); //connect gets called first, and the returned function from connect is invoked with Meds

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
  listContainer: {
    backgroundColor: '#ffffff',
    marginLeft: wp('6%'),
    marginRight: wp('6%'),
    padding: 20,
    alignItems: 'flex-start',
    marginTop: hp('2%'),
    borderRadius: 20,
    elevation: 8,
    marginBottom: hp('2%'),
  },
  disName: {
    fontSize: hp('3.5%'),
    fontFamily: 'Nunito-SemiBold',
    letterSpacing: 2,
    marginBottom: hp('1%'),
    marginTop: hp('1%')
  },
  Medicines: {
    fontSize: hp('2.5%'),
    fontFamily: 'Nunito-SemiBold',
    letterSpacing: 1,
  }
});