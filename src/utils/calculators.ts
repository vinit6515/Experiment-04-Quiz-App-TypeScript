import { IQuiz } from 'types/IQuiz';

/**
 * @description Calculate total quiz points based on correct answer
 * @param quiz or undefined
 * @returns number
 */

export const calculateEarnedPoints = (quiz: IQuiz | undefined): number => {
    if (!quiz) return 0;

    let total = 0;

    quiz?.questions.forEach((ques) => {
        const totalRight = ques.choices.filter((choice) => choice.correct).length;
        const pointPerAnswer = ques.point / totalRight;

        const selected = ques.choices.filter((choice) => choice.selected);

        /* Only if there is no wrong answer */
        if (!selected.some((option) => option.correct !== option.selected)) {
            selected.forEach((choice) => {
                if (choice.correct) {
                    total += pointPerAnswer;
                }
            });
        }
    });
    return total;
};

/**
 * @description Calculate total quiz points
 * @param quiz or undefined
 * @returns number
 */

export const calculateTotalPoints = (quiz: IQuiz | undefined): number => {
    if (!quiz) return 0;

    return quiz.questions.reduce((acc, curr) => {
        return acc + curr.point;
    }, 0);
};
