import { getDefaultQuestion } from 'data/defaultQuestion';
import { LayoutTypes } from 'types/ILayout';
import { IQuiz } from 'types/IQuiz';

export const getDefaultQuiz = (id: number): IQuiz => {
    const defaultQuestions = getDefaultQuestion(1);
    return {
        id: `quiz_a_${id}`,
        name: `Untitled quiz (${id})`,
        layout: LayoutTypes.allInOne,
        isPublished: false,
        questions: [defaultQuestions],
    };
};
