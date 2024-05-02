import { IQuestion } from 'types/IQuestion';
export const getDefaultQuestion = (id: number): IQuestion => {
    return {
        id: id,
        title: `Untitled Question (${id})`,
        imgUrl: '',
        point: 5,
        choices: [
            {
                id: `${id}_1`,
                imgUrl: '',
                title: 'Choice 1',
                correct: false,
            },
            {
                id: `${id}_2`,
                imgUrl: '',
                title: 'Choice 2',
                correct: false,
            },
        ],
    };
};
