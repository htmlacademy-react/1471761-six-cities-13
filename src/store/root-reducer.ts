import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process.slice';
import { offers } from './data-process/data-process.slice';
import { comments } from './comments-data/comments-data.slice';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Data]: offers.reducer,
  [NameSpace.Comment]: comments.reducer,
});
