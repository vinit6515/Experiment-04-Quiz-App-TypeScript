import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LayoutTypes } from 'types/ILayout';
import { IQuestion } from 'types/IQuestion';
import { IQuiz } from 'types/IQuiz';

/* Types */
interface IAnswerState {
    selectedQuizForAns?: IQuiz;
    selectedQuestionForAns?: IQuestion;
}

const initialState: IAnswerState = {
    selectedQuizForAns: undefined,
};

const answerSlice = createSlice({
    name: 'answer',
    initialState,
    reducers: {
        setQuizForAnswer(state, action: PayloadAction<IQuiz>) {
            /* Setting first as default if layout is single per page */
            if (action.payload.layout === LayoutTypes.singlePage) {
                state.selectedQuestionForAns = action.payload.questions[0];
            }
            state.selectedQuizForAns = action.payload;
        },

        setQuestionForAnswer(state, action: PayloadAction<IQuestion>) {
            state.selectedQuestionForAns = action.payload;
        },

        updateQuestionForAns(state, action: PayloadAction<IQuestion>) {
            const updatedQuestions = state.selectedQuizForAns?.questions.map((question) => {
                if (question.id !== action.payload.id) return question;
                state.selectedQuestionForAns = action.payload;
                return action.payload;
            });
            if (state.selectedQuizForAns && updatedQuestions) {
                state.selectedQuizForAns.questions = updatedQuestions;
            }
        },
        resetAnswersData() {
            return initialState;
        },
    },
});

export default answerSlice.reducer;
export const { resetAnswersData, setQuizForAnswer, updateQuestionForAns, setQuestionForAnswer } =
    answerSlice.actions;
