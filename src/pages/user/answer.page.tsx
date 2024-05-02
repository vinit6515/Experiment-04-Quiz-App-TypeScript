import { AnswerAllIOne, AnswerHeader, AnswerSinglePerPage, Layout } from 'components';
import { appRoutes } from 'constant';
import { useAnswer, useQuizzes } from 'hooks';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LayoutTypes } from 'types/ILayout';
import { calculateTotalPoints } from 'utils';

type AnswerParams = {
    id: string;
};

export const AnswerPage = () => {
    const { id } = useParams<AnswerParams>();
    const navigate = useNavigate();
    const { getQuizById } = useQuizzes();

    const { selectedQuizForAns, selectAQuizForAns } = useAnswer();

    const toFourOhFour = () => {
        navigate(appRoutes.NOT_FOUND);
    };

    useEffect(() => {
        if (id) {
            const theQuiz = getQuizById(id);
            if (!theQuiz) return toFourOhFour();
            selectAQuizForAns(theQuiz);
        } else {
            toFourOhFour();
        }
    }, [id]); //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Layout>
            {selectedQuizForAns && (
                <div className="max-w-2xl mx-auto p-2.5 md:p-5">
                    <AnswerHeader
                        title={selectedQuizForAns.name}
                        total={selectedQuizForAns.questions.length}
                        points={calculateTotalPoints(selectedQuizForAns)}
                    />
                    {selectedQuizForAns.layout === LayoutTypes.allInOne && (
                        <AnswerAllIOne quiz={selectedQuizForAns} />
                    )}
                    {selectedQuizForAns.layout === LayoutTypes.singlePage && (
                        <AnswerSinglePerPage quiz={selectedQuizForAns} />
                    )}
                </div>
            )}
        </Layout>
    );
};
