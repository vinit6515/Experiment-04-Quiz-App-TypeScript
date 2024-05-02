import { QuizListCard } from 'components';
import { Button } from 'components/shared/button/Button';
import { strings } from 'constant/strings';
import { useQuizAdd } from 'hooks/useQuizAdd';
import { IQuiz } from 'types/IQuiz';

interface IQuizListProps {
    quizzes: IQuiz[];
}

export const QuizList = ({ quizzes }: IQuizListProps) => {
    const { addAQuiz } = useQuizAdd();

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <p className="text-text text-sm">{strings.your_quizzes} -</p>
                <Button onClick={addAQuiz} text={strings.create_new} />
            </div>
            <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                {quizzes.map((quiz) => (
                    <QuizListCard key={quiz.id} quiz={quiz} />
                ))}
            </div>
        </div>
    );
};
