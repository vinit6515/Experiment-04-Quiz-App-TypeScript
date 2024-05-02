import { setSelectedQuestion, setSelectedQuiz } from 'store/quizSlice';
import { IQuestion } from 'types/IQuestion';
import { IQuiz } from 'types/IQuiz';
import { useAppDispatch } from './useAppDispatch';
import { useAppState } from './useAppState';

export const useQuizzes = () => {
    const { data: quizzes, selectedQuestion, selectedQuiz } = useAppState((state) => state.quizzes);
    const dispatch = useAppDispatch();

    const getQuizById = (quizId: string): IQuiz | undefined => {
        return quizzes.find((quiz) => quiz.id === quizId);
    };

    const selectQuiz = (quiz: IQuiz) => {
        return dispatch(setSelectedQuiz(quiz));
    };
    const selectQuestion = (question: IQuestion) => {
        return dispatch(setSelectedQuestion(question));
    };

    return {
        quizzes,
        selectedQuiz,
        selectedQuestion,
        selectQuiz,
        selectQuestion,
        getQuizById,
    };
};
