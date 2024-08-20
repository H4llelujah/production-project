import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOptions } from '@/shared/ui/deprecated/Select';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation('/articles');
    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );
    const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам'),
            },
        ],
        [t],
    );

    const changeSortHandler = useCallback(
        (newSort: string) => {
            onChangeSort(newSort as ArticleSortField);
        },
        [onChangeSort],
    );

    const changeOrderHandler = useCallback(
        (newOrder: string) => {
            onChangeOrder(newOrder as SortOrder);
        },
        [onChangeOrder],
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                data-testid="SortSelectButton"
                options={sortFieldOptions}
                label={t('Сортировать по')}
                onChange={changeSortHandler}
                value={sort}
            />
            <Select
                data-testid="OrderSelectButton"
                options={orderOptions}
                label={t('по')}
                onChange={changeOrderHandler}
                value={order}
                className={cls.order}
            />
        </div>
    );
});
