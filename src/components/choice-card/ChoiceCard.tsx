import { RemoveIcon } from 'assets/icons';
import { strings } from 'constant/strings';
import { useQuestion, useQuizRemover, useQuizzes } from 'hooks';
import { useQuizAdd } from 'hooks/useQuizAdd';
import { KeyboardEvent, useRef } from 'react';
import { toast } from 'react-toastify';
import { IChoice } from 'types/IChoice';
import { numberToLetter } from 'utils';

interface IChoiceCardProps {
    index: number;
    totalChoices: number;
    choice: IChoice;
}

export const ChoiceCard = ({ index, choice, totalChoices }: IChoiceCardProps) => {
    const { updateChoiceTitle, toggleAnswer } = useQuestion();
    const { selectedQuestion } = useQuizzes();
    const { addAChoice } = useQuizAdd();
    const inputRef = useRef<HTMLInputElement>(null);
    const { removeChoiceById } = useQuizRemover();

    const onTitleChange = (id: string, title: string) => {
        updateChoiceTitle(id, title);
    };

    const onInputFocus = () => {
        inputRef.current?.select();
    };

    const removeChoice = () => {
        if (totalChoices < 3)
            return toast.error(strings.min_choice_alert, {
                position: 'bottom-center',
            });
        removeChoiceById(choice.id);
    };

    /* Adding new choice on Enter key press if the item is last */
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (selectedQuestion?.choices.length === index + 1) {
                addAChoice();
            }
        }
    };

    return (
        <li className="my-2 items-center flex space-x-2.5 border p-1.5 rounded">
            <p className="border bg-lightBg text-lightText px-2 py-1 rounded-sm text-center font-medium">
                {numberToLetter(index + 1)}
            </p>
            <input
                ref={inputRef}
                onFocus={onInputFocus}
                value={choice.title}
                className="flex-1 text-sm focus:outline-none p-1 border-gray-400 focus:border-b border-dashed bg-transparent"
                onKeyDown={handleKeyDown}
                onChange={(e) => onTitleChange(choice.id, e.target.value)}
            />
            <input
                className="p-1.5 h-6 w-6 rounded-full cursor-pointer border-gray-400 border-2"
                type="checkbox"
                title={strings.make_it_correct}
                checked={choice.correct}
                onChange={() => toggleAnswer(choice.id)}
            />
            <button onClick={removeChoice}>
                <RemoveIcon />
            </button>
        </li>
    );
};
