import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Country } from '../../model/consts/Countries';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/ListBox';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/ListBox';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazahstan, content: Country.Kazahstan },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation('/profile');

    const { className, value, onChange, readonly } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <ListBox
                    className={classNames('', {}, [className])}
                    label={t('Страна')}
                    items={options}
                    value={value}
                    defaultValue={t('Укажите страну')}
                    onChange={onChangeHandler}
                    readonly={readonly}
                />
            }
            off={
                <ListBoxDeprecated
                    className={classNames('', {}, [className])}
                    label={t('Укажите страну')}
                    items={options}
                    value={value}
                    defaultValue={t('Укажите страну')}
                    onChange={onChangeHandler}
                    readonly={readonly}
                />
            }
        />
    );
});
