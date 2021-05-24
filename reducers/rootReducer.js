import { combineReducers } from 'redux';
import MedList from './medListReducer';
import SelectionReducer from './selectionReducer';
import UserAuthToken from './authreducer';

export default combineReducers({
    AuthToken: UserAuthToken,
    MedList: MedList,
    selectedDiseaseId: SelectionReducer,
});