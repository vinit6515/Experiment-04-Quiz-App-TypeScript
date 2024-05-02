import { LayoutTypes } from './ILayout';
import { IQuestion } from './IQuestion';

export interface IQuiz {
    id: string;
    name: string;
    isPublished: boolean;
    layout: LayoutTypes;
    questions: IQuestion[];
}
