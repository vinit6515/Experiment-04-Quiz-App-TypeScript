import { strings } from 'constant/strings';
import React from 'react';

interface IAnswerHeaderProps {
    title: string;
    total: number;
    points: number;
}

export const AnswerHeader = ({ title, total, points }: IAnswerHeaderProps) => {
    return (
        <div className="flex flex-col space-y-1 items-center text-text">
            <h1 className="text-lg font-medium">{title}</h1>
            <h2 className="text-sm border border-primary px-2 py-0.5 rounded">
                {total} {strings.questions} / {points} {strings.points}
            </h2>
        </div>
    );
};
