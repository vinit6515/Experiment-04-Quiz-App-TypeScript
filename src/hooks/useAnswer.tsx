import { setQuestionForAnswer, setQuizForAnswer, updateQuestionForAns } from 'store/answerSlice';
import { IQuestion } from 'types/IQuestion';
import { IQuiz } from 'types/IQuiz';
import { IResult } from 'types/IResult';
import { calculateEarnedPoints, calculateTotalPoints } from 'utils';
import { useAppDispatch } from './useAppDispatch';
import { useAppState } from './useAppState';

export const useAnswer = () => {
    const dispatch = useAppDispatch();
    const selectedQuizForAns = useAppState((state) => state.answer.selectedQuizForAns);
    const selectedQuestionForAns = useAppState((state) => state.answer.selectedQuestionForAns);

    const selectAQuizForAns = (quiz: IQuiz) => {
        dispatch(setQuizForAnswer(quiz));
    };

    const selectAQuestionForAns = (question: IQuestion) => {
        dispatch(setQuestionForAnswer(question));
    };

    const toggleChoiceById = (question: IQuestion, choiceId: string) => {
        const newChoices = question.choices.map((choice) => {
            if (choice.id !== choiceId) return choice;
            return { ...choice, selected: !choice.selected };
        });

        dispatch(updateQuestionForAns({ ...question, choices: newChoices }));
    };

    const getPoints = (): IResult => {
        const total = calculateTotalPoints(selectedQuizForAns);
        const earned = calculateEarnedPoints(selectedQuizForAns);
        return { total, earned };
    };

    return {
        selectedQuizForAns,
        selectAQuizForAns,
        toggleChoiceById,
        getPoints,
        selectAQuestionForAns,
        selectedQuestionForAns,
    };
};
