import { getDefaultQuestion } from 'data/defaultQuestion';
import { useQuizEditor } from './useQuizEditor';
import { useQuizzes } from './useQuizzes';

export const useQuizRemover = () => {
    const { updateQuizQuestions, modifySelectedQues } = useQuizEditor();
    const { selectedQuiz, selectQuestion, selectedQuestion } = useQuizzes();

    const removeQuestionById = (questionId: number) => {
        const filtered = selectedQuiz?.questions.filter((ques) => ques.id !== questionId);
        if (filtered) updateQuizQuestions(filtered);

        /* selecting previous question */
        const index = selectedQuiz?.questions.findIndex((ques) => ques.id === questionId);
        if (index && index > 0 && selectedQuiz?.questions[index - 1]) {
            selectQuestion(selectedQuiz?.questions[index - 1]);
        } else {
            selectQuestion(getDefaultQuestion(0));
        }
    };

    const removeChoiceById = (choiceId: string) => {
        if (selectedQuestion) {
            const newQuestions = selectedQuiz?.questions.map((ques) => {
                if (ques.id !== selectedQuestion.id) return ques;
                const filtered = ques.choices.filter((choice) => choice.id !== choiceId);
                modifySelectedQues({ ...ques, choices: filtered });
                return { ...ques, choices: filtered };
            });
            if (newQuestions) updateQuizQuestions(newQuestions);
        }
    };

    return { removeQuestionById, removeChoiceById };
};
