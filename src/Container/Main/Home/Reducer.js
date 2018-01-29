import {

} from './ActionType';
import { combineReducers } from 'redux';
import { LOAD_LIST_DATA, RECEIVE_LIST_DATA, VISIBLE_MODAL_SET} from '../../../Redux/ActionType';

const initialState = {
  books : {
    loading: false,
    data: [],
  },
  modalVisible: false,
};

const homeReducer = (state = initialState, action ) => {
  const { type, payload } = action;
  switch (type){
    case LOAD_LIST_DATA:
      if(payload === 'books'){
        const _books = {
          ...state.books,
          loading: true,
        };
        return {
          ...state,
          books: _books,
        }
      }else {
        return state;
      }
    case RECEIVE_LIST_DATA:

      if(payload.key === 'books'){
        let itemIds = [];
        let _data = payload.data;
        for (let id in _data) {
          if (_data.hasOwnProperty(id)) {
            itemIds.push(id);
          }
        }
        const _books = {
          ...state.books,
          loading: false,
          data: itemIds,
        };
        return {
          ...state,
          books: _books,
        }
      }else {
        return state;
      }

	case VISIBLE_MODAL_SET:
		if (payload === true) {
			return Object.assign({}, state, {
				modalVisible: true,
			})
				
		} else {

			return Object.assign({}, state, {
				modalVisible: false,
			})
				
	}

    default:
      return state;
  }
};


export default homeReducer;