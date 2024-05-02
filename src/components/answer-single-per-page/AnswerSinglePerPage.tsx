import { AnswerCard } from 'components/answer-card/AnswerCard';
import { Button } from 'components/shared/button/Button';
import { appRoutes } from 'constant';
import { strings } from 'constant/strings';
import { useAnswer } from 'hooks';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IQuiz } from 'types/IQuiz';

interface IAnswerPageProps {
    quiz: IQuiz;
}

export const AnswerSinglePerPage = ({ quiz: { questions } }: IAnswerPageProps) => {
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const { selectedQuestionForAns, selectAQuestionForAns } = useAnswer();
    const navigate = useNavigate();

    const toNextQuestion = () => {
        if (selectedQuestionForAns) {
            /* Got to result page on last question submit */
            if (questionIndex === questions.length - 1) {
                return navigate(appRoutes.RESULT);
            }
            if (questionIndex >= 0 && questionIndex < questions.length) {
                const nextItem = questions[questionIndex + 1];
                selectAQuestionForAns(nextItem);
            }
        }
    };

    const toPrevQuestion = () => {
        if (selectedQuestionForAns) {
            if (questionIndex >= 1 && questionIndex < questions.length) {
                const nextItem = questions[questionIndex - 1];
                selectAQuestionForAns(nextItem);
            }
        }
    };

    useEffect(() => {
        if (selectedQuestionForAns) {
            const currentIndex = questions.indexOf(selectedQuestionForAns);
            setQuestionIndex(currentIndex);
        }
    }, [selectedQuestionForAns, questions]);

    const isFirstQuestion = questionIndex === 0;
    const isLastQuestion = questionIndex === questions.length - 1;

    return (
        <div className="py-2.5">
            <h4 className="text-sm py-1 text-text">
                {strings.answering} <b>{questionIndex + 1} </b>
                {strings.out_of.toLocaleLowerCase()} <b>{questions.length}</b>
            </h4>
            <div className="[min-height:200px]">
                {selectedQuestionForAns && <AnswerCard question={selectedQuestionForAns} />}
            </div>
            <div className="mt-5 flex justify-between items-center">
                <Button
                    disabled={isFirstQuestion}
                    text={strings.prev_ques}
                    onClick={toPrevQuestion}
                />
                <Button
                    text={isLastQuestion ? strings.submit : strings.next_ques}
                    onClick={toNextQuestion}
                />
            </div>
        </div>
    );
};
