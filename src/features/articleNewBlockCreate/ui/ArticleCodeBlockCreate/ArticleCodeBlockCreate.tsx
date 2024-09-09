import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Textarea } from '@/shared/ui/redesigned/Textarea/Textarea';

interface ArticleCodeBlockCreateProps {
    className?: string;
    value?: string;
    onChangeValue: (value: string) => void;
}

export const ArticleCodeBlockCreate = memo(
    (props: ArticleCodeBlockCreateProps) => {
        const { className, value, onChangeValue } = props;
        const { t } = useTranslation();

        return (
            <Textarea
                className={classNames('', {}, [className])}
                value={value}
                onChange={onChangeValue}
                border="partial"
            />
        );
    },
);
