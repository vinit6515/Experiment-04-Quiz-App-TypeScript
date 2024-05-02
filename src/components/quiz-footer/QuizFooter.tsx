import cn from 'classnames';
import { Button } from 'components/shared/button/Button';
import { strings } from 'constant/strings';
import { useQuizEditor } from 'hooks';
import { useQuizzes } from 'hooks/useQuizzes';

export const QuizFooter = () => {
    const { selectedQuiz } = useQuizzes();
    const { togglePublish } = useQuizEditor();

    return (
        <div className="p-5 fixed bottom-0 left-0 right-0 bg-gray-300">
            <div className="max-w-3xl mx-auto flex justify-between items-center text-sm">
                <div className="flex space-x-2.5 items-center">
                    <p
                        className={cn(
                            'text-white px-2 py-0.5 rounded',
                            { 'bg-green-600': selectedQuiz?.isPublished },
                            { 'bg-orange-800': !selectedQuiz?.isPublished }
                        )}
                    >
                        {selectedQuiz?.isPublished ? strings.published : strings.draft}
                    </p>
                    <button
                        onClick={togglePublish}
                        className="text-gray-600 hover:text-blue-600 hover:underline"
                    >
                        {strings.mark_as}{' '}
                        {selectedQuiz?.isPublished ? strings.draft : strings.published}
                    </button>
                </div>
                <Button text={strings.save} />
            </div>
        </div>
    );
};
