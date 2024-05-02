import { strings } from 'constant/strings';
import React from 'react';
import { IResult } from 'types/IResult';

interface ResultCardProps {
    result: IResult | undefined;
}

export const ResultCard = ({ result }: ResultCardProps) => {
    return (
        <div className="text-center flex justify-center items-center flex-col bg-lightBg [min-height:80vh]">
            <div className="p-5 border rounded shadow-md">
                <h1>{strings.you_got}</h1>
                <h2 className="text-6xl text-gray-700 font-bold flex justify-center items-center space-x-1.5 uppercase">
                    <span className="text-primary">{result?.earned}</span>
                    <span className="text-2xl font-light"> {strings.out_of} </span>
                    <span>{result?.total}</span>
                </h2>
            </div>
            {/* For full mark */}
            {result?.earned === result?.total && (
                <h4 className="py-12 text-2xl font-semibold text-primary">{strings.congrats} 🎉</h4>
            )}
            <p className="text-sm mt-8">{strings.thank_you} 🙏</p>
        </div>
    );
};
