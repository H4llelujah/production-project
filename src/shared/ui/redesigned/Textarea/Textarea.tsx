import { memo } from 'react';
import {
    AdditionalClasses,
    classNames,
} from '@/shared/lib/classNames/classNames';
import cls from './Textarea.module.scss';

export type TextareaBorder = 'round' | 'normal' | 'partial';

interface TextareaProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    border?: TextareaBorder;
}

export const Textarea = memo((props: TextareaProps) => {
    const { className, border = 'normal', value, onChange } = props;
    const additionalClasses: AdditionalClasses = [className, cls[border]];

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <textarea
            value={value}
            onChange={onChangeHandler}
            className={classNames(cls.Textarea, {}, additionalClasses)}
        />
    );
});
