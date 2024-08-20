import { useTranslation } from 'react-i18next';
import { Page } from '@/widget/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="MainPage">
            132321321321312321
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
