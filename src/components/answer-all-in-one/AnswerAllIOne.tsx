import { AnswerCard } from 'components';
import { LinkButton } from 'components/link-button/LinkButton';
import { appRoutes } from 'constant';
import { IQuiz } from 'types/IQuiz';

interface IAllInOneProps {
    quiz: IQuiz;
}

export const AnswerAllIOne = ({ quiz }: IAllInOneProps) => {
    return (
        <div>
            {quiz.questions.map((question) => (
                <AnswerCard key={question.id} question={question} />
            ))}
            <div className="flex justify-center py-5">
                <LinkButton to={appRoutes.RESULT} text="Submit" />
            </div>
        </div>
    );
};
