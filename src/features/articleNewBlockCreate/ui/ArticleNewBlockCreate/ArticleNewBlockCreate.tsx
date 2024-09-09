import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { ArticleBlockType } from '@/entities/Article';
import { ArticleImageBlockCreate } from '../ArticleImageBlockCreate/ArticleImageBlockCreate';
import { ArticleTextBlockCreate } from '../ArticleTextBlockCreate/ArticleTextBlockCreate';
import { ArticleCodeBlockCreate } from '../ArticleCodeBlockCreate/ArticleCodeBlockCreate';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/redesigned/Button';
import cls from './ArticleNewBlockCreate.module.scss';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleNewBlockCreateProps {
    className?: string;
    blockType: ArticleBlockType;
    onAddBlock?: (
        blockType: ArticleBlockType,
        index: number,
        value: string,
        title?: string,
    ) => void;
    index?: number;
    isOpen?: boolean;
    onClose: () => void;
}

export const ArticleNewBlockCreate = memo(
    (props: ArticleNewBlockCreateProps) => {
        const { className, blockType, isOpen, onClose, onAddBlock, index } =
            props;
        const { t } = useTranslation();
        const [title, setTitle] = useState<string>();
        const [value, setValue] = useState<string>();
        const [error, setError] = useState<Boolean>(false);
        const onChangeValue = useCallback((value: string) => {
            setValue(value);
        }, []);
        const onChangeTitle = useCallback((title: string) => {
            setTitle(title);
        }, []);
        const createBlock = () => {
            switch (blockType) {
                case ArticleBlockType.TEXT:
                    return (
                        <ArticleTextBlockCreate
                            title={title}
                            onChangeTitle={onChangeTitle}
                            value={value}
                            onChangeValue={onChangeValue}
                            className={cls.BlockContent}
                        />
                    );
                case ArticleBlockType.CODE:
                    return (
                        <ArticleCodeBlockCreate
                            value={value}
                            onChangeValue={onChangeValue}
                            className={cls.BlockContent}
                        />
                    );
                case ArticleBlockType.IMAGE:
                    return (
                        <ArticleImageBlockCreate
                            title={title}
                            onChangeTitle={onChangeTitle}
                            value={value}
                            onChangeValue={onChangeValue}
                            className={cls.BlockContent}
                        />
                    );
                default:
                    return null;
            }
        };
        const content = createBlock();
        const onSave = useCallback(() => {
            if (index !== undefined && onAddBlock) {
                if (blockType === ArticleBlockType.CODE) {
                    if (value) {
                        onAddBlock(blockType, index, value);
                        onClose();
                        setValue('');
                        setTitle('');
                    } else {
                        setError(true);
                    }
                } else if (value && title) {
                    onAddBlock(blockType, index, value, title);
                    onClose();
                    setValue('');
                    setTitle('');
                } else {
                    setError(true);
                }
            }
        }, [blockType, index, onAddBlock, onClose, title, value]);

        const onCancel = useCallback(() => {
            onClose();
            setValue('');
            setTitle('');
        }, [onClose]);

        return (
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                className={classNames('', {}, [className])}
            >
                <VStack gap="16">
                    {error && <Text text={t('Все поля обязательны!')} />}
                    {content}
                    <HStack justify="between" max>
                        <Button color="error" onClick={onCancel}>
                            {t('Отменить')}
                        </Button>
                        <Button color="success" onClick={onSave}>
                            {t('Сохранить')}
                        </Button>
                    </HStack>
                </VStack>
            </Modal>
        );
    },
);
