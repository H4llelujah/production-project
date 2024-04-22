import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widget/Navbar';
import { Sidebar } from 'widget/Sidebar';
import { Suspense, useEffect } from 'react';
import { userActions } from 'entities/User';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import { useAppDispatch } from './providers/StoreProvider';

const App = () => {
    const { theme } = useTheme();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
