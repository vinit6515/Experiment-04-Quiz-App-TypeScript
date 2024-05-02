import cn from 'classnames';
import { appRoutes } from 'constant';
import { strings } from 'constant/strings';
import ContentEditable from 'react-contenteditable';
import { Link } from 'react-router-dom';
import { IQuiz } from 'types/IQuiz';

interface IQuizListCard {
    quiz: IQuiz;
}

export const QuizListCard = ({ quiz }: IQuizListCard) => {
    return (
        <div className="bg-lightBg p-5 flex flex-col justify-between space-y-2.5 border border-gray-300 rounded hover:bg-white transition-shadow hover:shadow">
            <ContentEditable
                className="text-lightText"
                html={quiz.name}
                disabled
                onChange={() => null}
            />
            <div className="flex justify-between border-t pt-2">
                <div className="text-xs flex flex-col space-y-2 items-start">
                    <p
                        className={cn(
                            'text-white px-2 py-0.5 rounded',
                            { 'bg-green-600': quiz?.isPublished },
                            { 'bg-orange-800': !quiz?.isPublished }
                        )}
                    >
                        {quiz.isPublished ? strings.published : strings.draft}
                    </p>
                    <p className="border-primary border border-opacity-20 text-primary px-2 py-0.5 rounded italic">
                        <b>{quiz.questions.length}</b> {strings.questions}
                    </p>
                </div>
                <div className="mt-auto flex flex-col space-y-2 items-center justify-between text-sm">
                    <Link
                        className="text-blue-600 hover:underline"
                        to={`${appRoutes.QUIZ_EDITOR}/${quiz.id}`}
                    >
                        {strings.edit_quiz} &#8594;
                    </Link>
                    <Link
                        className="text-blue-600 hover:underline"
                        to={`${appRoutes.ANSWER_QUIZ}/${quiz.id}`}
                    >
                        {strings.take_quiz} &#8594;
                    </Link>
                </div>
            </div>
        </div>
    );
};
