import { combineReducers } from 'redux';
import MedList from './medListReducer';
import SelectionReducer from './selectionReducer';

export default combineReducers({
    MedList: MedList,
    selectedDiseaseId: SelectionReducer,
});