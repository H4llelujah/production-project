import { memo, ReactNode, useState } from 'react';
import cls from './Checkbox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '../Button';
import { Checkbox } from './Checkbox';

export interface CheckboxItem {
    value: string;
    content: ReactNode;
    checked?: boolean;
    disabled?: boolean;
}

interface CheckboxProps {
    className?: string;
    value?: string;
    onChange: (value: string) => void;
    items?: CheckboxItem[];
    trigger?: ReactNode;
}

export const CheckboxList = memo((props: CheckboxProps) => {
    const { className, items, trigger, value, onChange } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen((prev) => !prev);
    };

    const checkboxList = (
        <div className={classNames(cls.checkboxes, {}, [className])}>
            {items?.map((item, index) => (
                <Checkbox
                    item={item}
                    onChange={onChange}
                    index={index}
                    check={item.checked}
                />
            ))}
        </div>
    );

    return (
        <div className={cls.checkbox}>
            <div>
                <Button className="selectBox" onClick={onOpen}>
                    {trigger}
                </Button>
                {isOpen && checkboxList}
            </div>
        </div>
    );
});
