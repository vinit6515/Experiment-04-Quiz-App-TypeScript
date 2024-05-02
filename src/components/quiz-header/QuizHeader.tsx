import { strings } from 'constant/strings';
import { useQuizEditor } from 'hooks';
import { useQuizzes } from 'hooks/useQuizzes';
import ContentEditable from 'react-contenteditable';
import { Link } from 'react-router-dom';
import { LayoutTypes } from 'types/ILayout';

export const QuizHeader = () => {
    const { selectedQuiz } = useQuizzes();
    const { updateQuizTitle, updateQuizLayout } = useQuizEditor();

    const onChangeLayout = (layout: string) => {
        updateQuizLayout(+layout);
    };

    const onChangeName = (newName: string) => {
        updateQuizTitle(newName);
    };

    return (
        <div>
            <ContentEditable
                html={selectedQuiz?.name || ''}
                onChange={(e) => onChangeName(e.target.value)}
                className="focus:outline-none focus:border-b focus: border-dashed text-center text-lg font-semibold text-lightText border-primary"
            />
            <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-2 items-start justify-between md:items-center border-b py-2">
                <Link to="/" className="text-sm hover:text-blue-500 whitespace-nowrap ">
                    &#8592; {strings.back_to_all}
                </Link>
                <div className="text-sm">
                    {strings.layout}:{' '}
                    <select
                        className="focus:outline-gray-300 border-gray-200 p-0.5 rounded"
                        value={selectedQuiz?.layout}
                        onChange={(e) => onChangeLayout(e.target.value)}
                    >
                        <option value={LayoutTypes.singlePage}>{strings.single_layout}</option>
                        <option value={LayoutTypes.allInOne}>{strings.multiple_layout}</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
