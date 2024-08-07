import { useTranslation } from 'react-i18next';
import { Page } from '@/widget/Page';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="MainPage">
            <Counter />
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
