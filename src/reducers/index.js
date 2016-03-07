import { combineReducers } from 'redux';
import PostReduceer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostReduceer,
  form: formReducer
});

export default rootReducer;
