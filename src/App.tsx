import { Spinner } from 'components';
import { useAppState } from 'hooks';
import { Router } from 'router';

export default function App() {
    const isLoading = useAppState((state) => state.quizzes.isLoading);
    if (isLoading) return <Spinner fullPage />;
    return <Router />;
}
