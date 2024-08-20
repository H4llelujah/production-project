import {
    Listbox as HListBox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { AnchorPropsWithSelection } from '@headlessui/react/dist/internal/floating';
import { classNames } from '@/shared/lib/classNames/classNames';
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

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

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
        <HStack gap="4" className={classNames('', {}, [className])}>
            {label && <span>{`${label}>`}</span>}
            <HListBox disabled={readonly} value={value} onChange={onChange}>
                <ListboxButton
                    disabled={readonly}
                    className={classNames(cls.trigger, {
                        [cls.disabled]: readonly,
                    })}
                >
                    {value ?? defaultValue}
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
                                    })}
                                >
                                    {selected && '!!!'}
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
