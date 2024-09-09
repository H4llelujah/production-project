import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Textarea } from '@/shared/ui/redesigned/Textarea/Textarea';

interface ArticleCodeBlockCreateProps {
    className?: string;
    value?: string;
    onChangeValue: (value: string) => void;
}

export const ArticleCodeBlockCreate = memo(
    (props: ArticleCodeBlockCreateProps) => {
        const { className, value, onChangeValue } = props;
        const { t } = useTranslation();
        const [code, setCode] = useState<string>();

        const onChangeCode = useCallback((value: string) => {
            setCode(value);
        }, []);
        return (
            <Textarea
                className={classNames('', {}, [className])}
                value={code}
                onChange={onChangeCode}
                border="partial"
            />
        );
    },
);
