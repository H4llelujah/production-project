import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

export interface DropwdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    anchor?: AnchorProps;
}

export function Dropdown(props: DropwdownProps) {
    const { className, items, trigger, anchor = 'bottom' } = props;
    const { theme } = useTheme();

    return (
        <Menu as="menu" className={classNames(cls.Dropdown, {}, [className])}>
            <MenuButton className={cls.btn}>{trigger}</MenuButton>
            <MenuItems
                anchor={anchor}
                className={classNames(cls.menu, {}, [theme])}
            >
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(cls.item, {
                                [cls.active]: active,
                            })}
                        >
                            {item.content}
                        </button>
                    );
                    if (item.href) {
                        return (
                            <MenuItem
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                key={index}
                            >
                                {content}
                            </MenuItem>
                        );
                    }

                    return (
                        <MenuItem
                            as={Fragment}
                            disabled={item.disabled}
                            key={index}
                        >
                            {content}
                        </MenuItem>
                    );
                })}
            </MenuItems>
        </Menu>
    );
}
