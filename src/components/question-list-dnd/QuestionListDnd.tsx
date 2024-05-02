import { dndTypes } from 'constant/dndTypes';
import { strings } from 'constant/strings';
import { useQuizEditor } from 'hooks';
import { useQuizAdd } from 'hooks/useQuizAdd';
import { useQuizzes } from 'hooks/useQuizzes';
import { useCallback, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { IQuestion } from 'types/IQuestion';
import { ListItem } from './ListItem';

export const QuestionListDnd = () => {
    const { selectedQuiz } = useQuizzes();
    const { updateQuizQuestions } = useQuizEditor();
    const [sortedQuestions, setSortedQuestions] = useState<IQuestion[]>([]);
    const { addAQuestion } = useQuizAdd();

    /* DnD drop zone */
    const [, drop] = useDrop(() => ({ accept: dndTypes.QUES_CARD }));

    const swapQuestions = useCallback(
        (fromIndex: number, toIndex: number) => {
            const movedItem = selectedQuiz?.questions.find((ques) => ques.id === fromIndex);
            const remainingItems = selectedQuiz?.questions.filter((ques) => ques.id !== fromIndex);
            if (remainingItems && movedItem) {
                const reorderedItems = [
                    ...remainingItems.slice(0, toIndex),
                    movedItem,
                    ...remainingItems.slice(toIndex),
                ];
                setSortedQuestions(reorderedItems);
                updateQuizQuestions(reorderedItems);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [selectedQuiz?.questions]
    );

    useEffect(() => {
        if (selectedQuiz?.questions) {
            setSortedQuestions(selectedQuiz.questions);
        }
    }, [selectedQuiz]);

    return (
        <div ref={drop}>
            <ul className="[min-width:200px] mt-5 md:mt-0">
                {sortedQuestions.map((question) => (
                    <ListItem key={question.id} swapQuestions={swapQuestions} question={question} />
                ))}
                <button
                    onClick={addAQuestion}
                    className="border border-primary px-3 py-1 rounded hover:text-primary text-sm text-gray-700"
                >
                    {strings.add_question}
                </button>
            </ul>
        </div>
    );
};
