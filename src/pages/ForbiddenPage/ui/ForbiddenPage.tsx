import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widget/Page';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <Page
            className={classNames('', {}, [className])}
            data-testid="ForbiddenPage"
        >
            {t('У вас нет доступа к этой странице!')}
        </Page>
    );
});
