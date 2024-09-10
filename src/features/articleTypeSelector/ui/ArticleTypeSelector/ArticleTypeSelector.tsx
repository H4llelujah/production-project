import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleType } from '@/entities/Article';
import { CheckboxItem, CheckboxList } from '@/shared/ui/redesigned/Checkbox';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleTypeSelectorProps {
    className?: string;
    value?: string;
    types?: ArticleType[];
    onChange: (value: string) => void;
}

export const ArticleTypeSelector = memo((props: ArticleTypeSelectorProps) => {
    const { className, value, onChange, types } = props;

    console.log(types);

    const items = useMemo<CheckboxItem[]>(
        () => [
            {
                value: ArticleType.IT,
                content: ArticleType.IT,
                checked: types?.includes(ArticleType.IT),
            },
            {
                value: ArticleType.ECONOMICS,
                content: ArticleType.ECONOMICS,
                checked: types?.includes(ArticleType.ECONOMICS),
            },
            {
                value: ArticleType.SCIENCE,
                content: ArticleType.SCIENCE,
                checked: types?.includes(ArticleType.SCIENCE),
            },
        ],
        [types],
    );

    const { t } = useTranslation();
    const trigger = <Text text={t('Выберите тип статьи')} />;
    return (
        <div className={classNames('', {}, [className])}>
            <CheckboxList
                items={items}
                trigger={trigger}
                onChange={onChange}
                value={value}
            />
        </div>
    );
});
