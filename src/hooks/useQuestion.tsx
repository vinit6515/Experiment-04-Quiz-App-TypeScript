import { updateSelectedQuestion } from 'store/quizSlice';
import { IQuestion } from 'types/IQuestion';
import { useAppDispatch } from './useAppDispatch';
import { useQuizzes } from './useQuizzes';

export const useQuestion = () => {
    const { selectedQuestion } = useQuizzes();
    const dispatch = useAppDispatch();

    const updateQuestionTitle = (title: string) => {
        if (selectedQuestion) {
            const newQuestion: IQuestion = { ...selectedQuestion, title };
            dispatch(updateSelectedQuestion(newQuestion));
        }
    };
    const updateQuestionImgUrl = (imgUrl: string) => {
        if (selectedQuestion) {
            const newQuestion: IQuestion = { ...selectedQuestion, imgUrl };
            dispatch(updateSelectedQuestion(newQuestion));
        }
    };
    const updateQuestionPoint = (point: number) => {
        if (selectedQuestion) {
            const newQuestion: IQuestion = { ...selectedQuestion, point };
            dispatch(updateSelectedQuestion(newQuestion));
        }
    };

    const updateChoiceTitle = (choiceId: string, title: string) => {
        if (selectedQuestion) {
            const newChoices = selectedQuestion.choices.map((choice) => {
                if (choice.id !== choiceId) return choice;
                return { ...choice, title };
            });
            const newQuestion: IQuestion = { ...selectedQuestion, choices: newChoices };
            dispatch(updateSelectedQuestion(newQuestion));
        }
    };

    const toggleAnswer = (choiceId: string) => {
        if (selectedQuestion) {
            const newChoices = selectedQuestion.choices.map((choice) => {
                if (choice.id !== choiceId) return choice;
                return { ...choice, correct: !choice.correct };
            });
            const newQuestion: IQuestion = { ...selectedQuestion, choices: newChoices };
            dispatch(updateSelectedQuestion(newQuestion));
        }
    };

    return {
        updateQuestionTitle,
        updateChoiceTitle,
        updateQuestionPoint,
        toggleAnswer,
        updateQuestionImgUrl,
    };
};
