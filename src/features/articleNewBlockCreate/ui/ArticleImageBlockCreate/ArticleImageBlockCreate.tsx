import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/redesigned/Input';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleImageBlockCreateProps {
    className?: string;
    title?: string;
    value?: string;
    onChangeValue: (value: string) => void;
    onChangeTitle: (title: string) => void;
}

export const ArticleImageBlockCreate = memo(
    (props: ArticleImageBlockCreateProps) => {
        const { className, title, value, onChangeTitle, onChangeValue } = props;
        const { t } = useTranslation();

        return (
            <VStack className={classNames('', {}, [className])} gap="16">
                <Input
                    placeholder={t('Заголовок')}
                    value={title}
                    onChange={onChangeTitle}
                />
                <Input
                    placeholder={t('Ссылка на изображение')}
                    value={value}
                    onChange={onChangeValue}
                />
            </VStack>
        );
    },
);
