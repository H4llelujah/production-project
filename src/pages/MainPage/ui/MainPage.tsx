import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <BugButton />
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
