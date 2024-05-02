/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { DragIcon, RemoveIcon } from 'assets/icons';
import cn from 'classnames';
import { dndTypes } from 'constant/dndTypes';
import { useQuizRemover } from 'hooks';
import { useQuizzes } from 'hooks/useQuizzes';
import ContentEditable from 'react-contenteditable';
import { useDrag, useDrop } from 'react-dnd';
import { IQuestion } from 'types/IQuestion';

interface ListItemProps {
    question: IQuestion;
    swapQuestions: (first: number, second: number) => void;
}
export const ListItem = ({ question, swapQuestions }: ListItemProps) => {
    const { selectedQuestion, selectQuestion } = useQuizzes();
    const { removeQuestionById } = useQuizRemover();

    const onQuestionClick = (selected: IQuestion) => {
        selectQuestion(selected);
    };

    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: dndTypes.QUES_CARD,
            item: { index: question.id },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
            end: (item, monitor) => {
                const { index } = item;
                const didDrop = monitor.didDrop();
                if (!didDrop) {
                    swapQuestions(question.id, index);
                }
            },
        }),
        [swapQuestions]
    );

    const [, drop] = useDrop(
        () => ({
            accept: dndTypes.QUES_CARD,
            hover({ index }: { index: number }) {
                if (index !== question.id) {
                    swapQuestions(index, question.id);
                }
            },
        }),
        [swapQuestions]
    );

    return (
        <div>
            <li
                ref={(node) => drag(drop(node))}
                onClick={() => onQuestionClick(question)}
                className={cn(
                    'flex items-center p-2 mb-2 space-x-2 border border-gray-200 cursor-pointer rounded',
                    {
                        'border-b-2 border-b-primary': question.id === selectedQuestion?.id,
                    },
                    { 'opacity-40': isDragging }
                )}
            >
                <DragIcon />
                <ContentEditable
                    className="text-xs w-56 truncate"
                    html={question.title}
                    disabled
                    tagName="p"
                    onChange={() => null}
                />
                <button
                    onClick={(e) => {
                        removeQuestionById(question.id);
                        e.stopPropagation();
                    }}
                >
                    <RemoveIcon />
                </button>
            </li>
        </div>
    );
};
