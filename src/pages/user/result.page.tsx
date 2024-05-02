import { Layout, ResultCard, Spinner } from 'components';
import { appRoutes } from 'constant';
import { useAnswer } from 'hooks';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IResult } from 'types/IResult';

export const ResultPage = () => {
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const { selectedQuizForAns, getPoints } = useAnswer();
    const [points, setPoints] = useState<IResult | undefined>();

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (!selectedQuizForAns) {
            navigate(appRoutes.NOT_FOUND);
        } else {
            timeoutId = setTimeout(() => {
                setPoints(getPoints());
                setLoaded(true);
            }, 1500);
        }
        return () => {
            clearTimeout(timeoutId);
        };
    }, []); //eslint-disable-line

    if (!loaded) {
        return <Spinner fullPage />;
    }

    return (
        <Layout>
            <ResultCard result={points} />
        </Layout>
    );
};
