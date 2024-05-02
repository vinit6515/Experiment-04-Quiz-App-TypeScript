import { updateSelectedQuestion, updateSelectedQuiz } from 'store/quizSlice';
import { LayoutTypes } from 'types/ILayout';
import { IQuestion } from 'types/IQuestion';
import { IQuiz } from 'types/IQuiz';
import { useAppDispatch } from './useAppDispatch';
import { useQuizzes } from './useQuizzes';

export const useQuizEditor = () => {
    const dispatch = useAppDispatch();
    const { selectedQuiz } = useQuizzes();

    const updateQuizTitle = (title: string) => {
        if (selectedQuiz) {
            const quiz: IQuiz = { ...selectedQuiz, name: title };
            dispatch(updateSelectedQuiz(quiz));
        }
    };

    const updateQuizLayout = (layout: LayoutTypes) => {
        if (selectedQuiz) {
            const quiz: IQuiz = { ...selectedQuiz, layout: layout };
            dispatch(updateSelectedQuiz(quiz));
        }
    };

    const updateQuizQuestions = (questions: IQuestion[]) => {
        if (selectedQuiz) {
            const quiz: IQuiz = { ...selectedQuiz, questions };
            dispatch(updateSelectedQuiz(quiz));
        }
    };

    const modifySelectedQues = (question: IQuestion) => {
        dispatch(updateSelectedQuestion(question));
    };

    const togglePublish = () => {
        if (selectedQuiz) {
            const quiz: IQuiz = { ...selectedQuiz, isPublished: !selectedQuiz.isPublished };
            dispatch(updateSelectedQuiz(quiz));
        }
    };

    return {
        updateQuizTitle,
        updateQuizLayout,
        togglePublish,
        updateQuizQuestions,
        modifySelectedQues,
    };
};
