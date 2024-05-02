import { EditQuestionCard, Layout, QuestionListDnd, QuizFooter, QuizHeader } from 'components';
import { appRoutes } from 'constant';
import { useQuizzes } from 'hooks/useQuizzes';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type QuizParams = {
    id: string;
};

export const CreateQUizPage = () => {
    const { id } = useParams<QuizParams>();
    const navigate = useNavigate();
    const { selectedQuestion, getQuizById, selectQuiz } = useQuizzes();

    const toFourOhFour = () => {
        navigate(appRoutes.NOT_FOUND);
    };

    useEffect(() => {
        if (id) {
            const theQuiz = getQuizById(id);
            if (!theQuiz) return toFourOhFour();
            selectQuiz(theQuiz);
        } else {
            toFourOhFour();
        }
    }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Layout>
            <div className="max-w-3xl mx-auto">
                <QuizHeader />
                <div className="flex md:divide-x-2 mt-5 md:mt-10 flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 pb-20 md:pb-32">
                    <QuestionListDnd />
                    {selectedQuestion && <EditQuestionCard question={selectedQuestion} />}
                </div>
                <QuizFooter />
            </div>
        </Layout>
    );
};
