import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './PageError.module.scss';
import { Button } from '@/shared/ui/deprecated/Button';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const ReloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={ReloadPage}>{t('Обновить страницу')}</Button>
        </div>
    );
};
