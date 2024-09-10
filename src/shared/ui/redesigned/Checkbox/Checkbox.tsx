import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import cls from './Checkbox.module.scss';
import { CheckboxItem } from './CheckboxList';

interface CheckboxProps {
    className?: string;
    index?: number;
    item: CheckboxItem;
    onChange: (value: string) => void;
    check?: boolean;
}

export const Checkbox = memo((props: CheckboxProps) => {
    const { className, index, item, onChange, check = false } = props;
    const [checked, setIsChecked] = useState(check);
    const { t } = useTranslation();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
        setIsChecked((prev) => !prev);
    };

    return (
        <label htmlFor={`${index}`} className={cls.option} key={item.value}>
            <input
                type="checkbox"
                id={`${index}`}
                value={item.value}
                onChange={onChangeHandler}
                checked={checked}
            />
            <span>{item.content}</span>
        </label>
    );
});
