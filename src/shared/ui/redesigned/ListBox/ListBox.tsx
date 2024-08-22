import {
    Listbox as HListBox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';
import { Fragment, ReactNode, useMemo } from 'react';
import { AnchorPropsWithSelection } from '@headlessui/react/dist/internal/floating';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { HStack } from '../../redesigned/Stack';
import { Button } from '../Button';

export interface ListBoxItem<T extends string> {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    label?: string;
    defaultValue?: string;
    readonly?: boolean;
    anchor?: AnchorPropsWithSelection;
    onChange: (value: T) => void;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        className,
        defaultValue,
        value,
        items,
        label,
        onChange,
        readonly,
        anchor = 'bottom start',
    } = props;

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

    return (
        <HStack gap="4" className={classNames('', {}, [className])}>
            {label && <span>{`${label}>`}</span>}
            <HListBox disabled={readonly} value={value} onChange={onChange}>
                <ListboxButton
                    disabled={readonly}
                    as="div"
                    className={classNames(cls.trigger, {
                        [cls.disabled]: readonly,
                    })}
                >
                    <Button variant="filled" disabled={readonly}>
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </ListboxButton>
                <ListboxOptions anchor={anchor} className={cls.options} as="ul">
                    {items?.map((item) => (
                        <ListboxOption
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                        [cls.selected]: selected,
                                    })}
                                >
                                    {selected}
                                    {item.content}
                                </li>
                            )}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </HListBox>
        </HStack>
    );
}
