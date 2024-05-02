import { strings } from 'constant/strings';
import { useAnswer } from 'hooks';
import { IQuestion } from 'types/IQuestion';

interface IAnswerCardProps {
    question: IQuestion;
}

export const AnswerCard = ({ question }: IAnswerCardProps) => {
    const { toggleChoiceById } = useAnswer();

    const onToggleAnswer = (choiceId: string) => {
        toggleChoiceById(question, choiceId);
    };

    return (
        <div
            key={question.id}
            className="border border-dashed border-gray-300 p-2.5 mt-2.5 rounded"
        >
            <div className="flex justify-between">
                <h3 className="text-text flex-2">{question.title}</h3>
                <p className="text-sm px-1 py-0.5 rounded border border-primary self-start">
                    <b className="mr-1">{question.point}</b>
                    {strings.points}
                </p>
            </div>
            <div className="flex justify-center py-2.5">
                {question.imgUrl && (
                    <img
                        className="image-contain rounded"
                        src={question.imgUrl}
                        alt={question.title}
                    />
                )}
            </div>
            <div className="mt-2.5 flex flex-col space-y-2">
                {question.choices.map((choice) => (
                    <label
                        key={choice.id}
                        className="cursor-pointer p-1 text-sm flex justify-start items-center"
                    >
                        <input
                            checked={!!choice.selected}
                            onChange={() => onToggleAnswer(choice.id)}
                            className="mx-2 h-5 w-5"
                            type="checkbox"
                        />
                        <span>{choice.title}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};
