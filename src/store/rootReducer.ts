import { combineReducers } from '@reduxjs/toolkit';
import answer from './answerSlice';
import quizzes from './quizSlice';

export default combineReducers({
    quizzes,
    answer,
});
