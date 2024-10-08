import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Currency } from '../../model/consts/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/ListBox';
import { ListBox } from '@/shared/ui/redesigned/ListBox';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation('/profile');

    const { className, value, onChange, readonly } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <ListBox
                    className={classNames('', {}, [className])}
                    label={t('Валюта')}
                    items={options}
                    value={value}
                    defaultValue={t('Укажите валюту')}
                    onChange={onChangeHandler}
                    readonly={readonly}
                />
            }
            off={
                <ListBoxDeprecated
                    className={classNames('', {}, [className])}
                    label={t('Укажите валюту')}
                    items={options}
                    value={value}
                    defaultValue={t('Укажите валюту')}
                    onChange={onChangeHandler}
                    readonly={readonly}
                />
            }
        />
    );
});
