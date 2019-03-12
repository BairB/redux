import {TEXT_ADD} from './constants';

const defaultState = {
    text: 'проверка 23232323' 
};

const infaReducer = (state = defaultState, action) => {
    switch(action.type) {
        case TEXT_ADD:
            return {
                ...state,
                text: action.text
            }
            default: {
                return state
            }
    }
};
  
export default infaReducer;