import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChoice } from 'types/IChoice';
import { IQuestion } from 'types/IQuestion';
import { IQuiz } from 'types/IQuiz';
import { loadState, saveState } from 'utils/storage';
import { localStorageKeys } from './../constant/localstorageKeys';

/* Types */
interface IQuizState {
    isLoading: boolean;
    data: IQuiz[];
    selectedQuiz?: IQuiz;
    selectedQuestion?: IQuestion;
}

const initialState: IQuizState = {
    isLoading: false,
    data: loadState(localStorageKeys.QUIZZES) || [],
};

const quizSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        importDummyData(state, action: PayloadAction<IQuiz[]>) {
            state.data = action.payload;
            saveState(localStorageKeys.QUIZZES, state.data);
        },
        setSelectedQuiz(state, action: PayloadAction<IQuiz>) {
            state.selectedQuiz = action.payload;
            /* Selecting first question by default */
            state.selectedQuestion = action.payload.questions[0];
        },
        setSelectedQuestion(state, action: PayloadAction<IQuestion>) {
            state.selectedQuestion = action.payload;
        },
        deSelectQuiz(state) {
            state.selectedQuiz = undefined;
            state.selectedQuestion = undefined;
        },

        updateSelectedQuiz(state, action: PayloadAction<IQuiz>) {
            const updatedQuizzes = state.data.map((quiz) => {
                if (quiz.id !== state.selectedQuiz?.id) return quiz;
                state.selectedQuiz = action.payload;
                return action.payload;
            });
            state.data = updatedQuizzes;
            saveState(localStorageKeys.QUIZZES, state.data);
        },

        updateSelectedQuestion(state, action: PayloadAction<IQuestion>) {
            const updatedQuizzes = state.data.map((quiz) => {
                if (quiz.id !== state.selectedQuiz?.id) return quiz;
                quiz.questions = quiz.questions.map((question) => {
                    if (question.id !== state.selectedQuestion?.id) return question;
                    state.selectedQuestion = action.payload;
                    return action.payload;
                });
                state.selectedQuiz = quiz;
                return quiz;
            });
            state.data = updatedQuizzes;
            saveState(localStorageKeys.QUIZZES, state.data);
        },

        addQuiz(state, action: PayloadAction<IQuiz>) {
            state.data.push(action.payload);
            state.selectedQuiz = action.payload;
            saveState(localStorageKeys.QUIZZES, state.data);
        },

        addQuestion(state, action: PayloadAction<IQuestion>) {
            const updatedQuizzes = state.data.map((quiz) => {
                if (quiz.id !== state.selectedQuiz?.id) return quiz;
                quiz.questions.push(action.payload);
                /* Update selected quiz */
                state.selectedQuiz?.questions.push(action.payload);
                state.selectedQuestion = action.payload;
                return quiz;
            });
            state.data = updatedQuizzes;
            saveState(localStorageKeys.QUIZZES, state.data);
        },

        addChoice(state, action: PayloadAction<IChoice>) {
            const updatedQuizzes = state.data.map((quiz) => {
                if (quiz.id !== state.selectedQuiz?.id) return quiz;
                quiz.questions.map((question) => {
                    if (question.id !== state.selectedQuestion?.id) return question;
                    question.choices.push(action.payload);
                    state.selectedQuestion = question;
                    return question;
                });
                state.selectedQuiz = quiz;
                return quiz;
            });
            state.data = updatedQuizzes;
            saveState(localStorageKeys.QUIZZES, state.data);
        },
        resetAll() {
            return initialState;
        },
    },
});

export default quizSlice.reducer;
export const {
    importDummyData,
    setSelectedQuiz,
    setSelectedQuestion,
    deSelectQuiz,
    resetAll,
    updateSelectedQuiz,
    addQuestion,
    addChoice,
    addQuiz,
    updateSelectedQuestion,
} = quizSlice.actions;
