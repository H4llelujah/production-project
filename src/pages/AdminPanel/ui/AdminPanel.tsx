import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widget/Page';

interface AdminPanelProps {
    className?: string;
}

const AdminPanel = (props: AdminPanelProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <Page className={classNames('', {}, [className])}>
            {t('Админ панель')}
        </Page>
    );
};

export default memo(AdminPanel);
