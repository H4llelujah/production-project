import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Textarea } from '@/shared/ui/redesigned/Textarea/Textarea';

interface ArticleTextBlockCreateProps {
    className?: string;
    title?: string;
    value?: string;
    onChangeValue: (value: string) => void;
    onChangeTitle: (title: string) => void;
}

export const ArticleTextBlockCreate = memo(
    (props: ArticleTextBlockCreateProps) => {
        const { className, value, title, onChangeTitle, onChangeValue } = props;
        const { t } = useTranslation();

        return (
            <VStack gap="16" className={classNames('', {}, [className])}>
                <Input
                    placeholder={t('Заголовок')}
                    value={title}
                    onChange={onChangeTitle}
                />
                <Textarea
                    value={value}
                    onChange={onChangeValue}
                    border="partial"
                />
            </VStack>
        );
    },
);
