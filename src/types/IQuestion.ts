import { IChoice } from './IChoice';

export interface IQuestion {
    id: number;
    title: string;
    imgUrl?: string;
    choices: IChoice[];
    point: number;
}
