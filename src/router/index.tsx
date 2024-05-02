import { appRoutes } from 'constant';
import { CreateQUizPage } from 'pages/admin/createQuiz.page';
import DashboardPage from 'pages/admin/dashboard.page';
import { FourOhFour } from 'pages/common/FourOhFour';
import { AnswerPage } from 'pages/user/answer.page';
import HomePage from 'pages/user/home.page';
import { ResultPage } from 'pages/user/result.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Admin Routes */}
                <Route path={appRoutes.ADMIN_DASHBOARD} element={<DashboardPage />} />
                <Route path={appRoutes.QUIZ_EDITOR}>
                    <Route path=":id" element={<CreateQUizPage />} />
                </Route>

                {/* User Routes */}
                <Route path={appRoutes.USER_HOME} element={<HomePage />} />
                <Route path={appRoutes.ANSWER_QUIZ}>
                    <Route path=":id" element={<AnswerPage />} />
                </Route>
                <Route path={appRoutes.RESULT} element={<ResultPage />} />

                {/* Other Routes */}
                <Route path={appRoutes.NOT_FOUND} element={<FourOhFour />} />
                <Route path="*" element={<FourOhFour />} />
            </Routes>
        </BrowserRouter>
    );
};
