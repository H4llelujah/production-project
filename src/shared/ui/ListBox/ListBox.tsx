import {
    Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions,
} from '@headlessui/react';
import { ReactNode } from 'react';
import { AnchorPropsWithSelection } from '@headlessui/react/dist/internal/floating';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';
import { HStack } from '../Stack';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

export interface ListBoxProps {
    className?: string;
    items?: ListBoxItem[];
    label?: string;
    value?: string;
    defaultValue: string;
    readonly?: boolean;
    anchor?: AnchorPropsWithSelection;
    onChange: (value: string) => void;
}

export function ListBox(props: ListBoxProps) {
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

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox disabled={readonly} value={value} onChange={onChange}>
                <ListboxButton className={cls.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </ListboxButton>
                <ListboxOptions
                    anchor={anchor}
                    className={cls.options}
                >
                    {items?.map((item) => (
                        <ListboxOption
                            disabled={item.disabled}
                            key={item.value}
                            value={item.value}
                            className={classNames(
                                cls.item,
                                {
                                    [cls.active]: item.value === value,
                                    [cls.disabled]: item.disabled,
                                },
                            )}
                        >
                            {item.content}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </HListBox>
        </HStack>
    );
}
