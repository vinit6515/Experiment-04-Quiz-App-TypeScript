import { appRoutes } from 'constant';
import { getDefaultChoice } from 'data/defaultChoice';
import { getDefaultQuestion } from 'data/defaultQuestion';
import { getDefaultQuiz } from 'data/defaultQuiz';
import { useNavigate } from 'react-router-dom';
import { addChoice, addQuestion, addQuiz, deSelectQuiz } from 'store/quizSlice';
import { useAppDispatch } from './useAppDispatch';
import { useQuizzes } from './useQuizzes';

export const useQuizAdd = () => {
    const dispatch = useAppDispatch();
    const { selectedQuiz, selectedQuestion, quizzes } = useQuizzes();
    const navigate = useNavigate();

    const addAQuiz = () => {
        dispatch(deSelectQuiz());
        const newQuiz = getDefaultQuiz(quizzes.length + 1);
        dispatch(addQuiz(newQuiz));
        navigate(`${appRoutes.QUIZ_EDITOR}/${newQuiz.id}`);
    };

    const addAQuestion = () => {
        if (selectedQuiz) {
            const newQuestion = getDefaultQuestion(selectedQuiz.questions.length + 1);
            dispatch(addQuestion(newQuestion));
        }
    };
    const addAChoice = () => {
        if (selectedQuestion) {
            const newChoice = getDefaultChoice(String(selectedQuestion?.choices.length + 1));
            dispatch(addChoice(newChoice));
        }
    };

    return { addAQuestion, addAChoice, addAQuiz };
};
