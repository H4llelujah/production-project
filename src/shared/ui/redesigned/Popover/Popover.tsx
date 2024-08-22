import {
    Popover as HPovover,
    PopoverButton,
    PopoverPanel,
} from '@headlessui/react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    anchor?: AnchorProps;
    children?: ReactNode;
}

export function Popover(props: PopoverProps) {
    const { className, trigger, anchor = 'bottom start', children } = props;

    const { theme } = useTheme();

    return (
        <HPovover className={classNames(cls.Popover, {}, [className])}>
            <PopoverButton as="div" className={cls.btn}>
                {trigger}
            </PopoverButton>
            <PopoverPanel
                anchor={anchor}
                className={classNames(cls.panel, {}, [theme])}
            >
                {children}
            </PopoverPanel>
        </HPovover>
    );
}
