import { ChoiceCard, Input } from 'components';
import { strings } from 'constant/strings';
import { useQuestion } from 'hooks';
import { useQuizAdd } from 'hooks/useQuizAdd';
import { ChangeEvent, useEffect, useRef } from 'react';
import ContentEditable from 'react-contenteditable';
import { IQuestion } from 'types/IQuestion';

interface IEditQuestionCardProps {
    question: IQuestion;
}

export const EditQuestionCard = ({ question }: IEditQuestionCardProps) => {
    const { addAChoice } = useQuizAdd();
    const { updateQuestionTitle, updateQuestionPoint, updateQuestionImgUrl } = useQuestion();

    const ulRef = useRef<HTMLUListElement>(null);

    const onTitleChange = (title: string) => {
        updateQuestionTitle(title);
    };

    const onChangeUrl = (e: ChangeEvent<HTMLInputElement>) => {
        updateQuestionImgUrl(e.target.value);
    };

    /* Adding focus on choice while adding */
    const lastQuestionIndex = question.choices[question.choices.length - 1];
    useEffect(() => {
        const addedChoice = ulRef.current?.lastElementChild?.getElementsByTagName('input')[0];
        if (addedChoice) {
            addedChoice.focus();
            window.getSelection();
        }
    }, [lastQuestionIndex]);

    return (
        <div className="md:pl-5 order-first md:order-last flex-1">
            <ContentEditable
                tagName="h3"
                html={question.title}
                onChange={(e) => onTitleChange(e.target.value)}
                className="border-b border-gray-500 text-gray-600 text-xl focus:outline-none focus:border-b border-dashed"
            />

            <div className="flex justify-between space-x-2.5 items-center">
                <Input
                    name="url"
                    type="text"
                    value={question.imgUrl}
                    onChange={onChangeUrl}
                    placeholder="Image URL (optional)"
                />
                <div className="flex items-center space-x-1">
                    <span className="text-xs">Point :</span>
                    <Input
                        name="point"
                        value={question.point}
                        onChange={(e) => updateQuestionPoint(parseFloat(e.target.value))}
                        type="number"
                    />
                </div>
            </div>
            <ul ref={ulRef}>
                {question.choices.map((choice, index) => (
                    <ChoiceCard
                        totalChoices={question.choices.length}
                        key={choice.id}
                        choice={choice}
                        index={index}
                    />
                ))}
            </ul>
            <button
                onClick={addAChoice}
                className="border border-primary px-3 py-1 rounded hover:text-primary text-sm text-gray-700"
            >
                {strings.add_option}
            </button>
        </div>
    );
};
