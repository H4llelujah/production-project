import { Popover as HPovover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    anchor?: AnchorProps;
    children?: ReactNode;
}

export function Popover(props: PopoverProps) {
    const {
        className, trigger, anchor = 'bottom start', children,
    } = props;
    return (
        <HPovover className={classNames(cls.Popover, {}, [className])}>
            <PopoverButton as="div" className={cls.btn}>
                {trigger}
            </PopoverButton>
            <PopoverPanel anchor={anchor} className={cls.panel}>
                {children}
            </PopoverPanel>
        </HPovover>
    );
}
