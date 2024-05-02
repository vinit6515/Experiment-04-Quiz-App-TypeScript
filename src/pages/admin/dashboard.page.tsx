import { EmptyList, Layout, QuizList } from 'components';
import { useAppState } from 'hooks';

const DashboardPage = () => {
    const quizzes = useAppState((state) => state.quizzes.data);

    if (quizzes.length === 0) {
        return <EmptyList />;
    }

    return (
        <Layout>
            <QuizList quizzes={quizzes} />
        </Layout>
    );
};

export default DashboardPage;
