import { combineReducers } from 'redux';
import playerFinder,{NAME} from '../playerFinder';


export default combineReducers({
    [NAME]: playerFinder
});