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

interface ArticleNewBlockCreateProps {
    className?: string;
    blockType?: ArticleBlockType;
    isOpen?: boolean;
    onClose?: () => void;
}

export const ArticleNewBlockCreate = memo(
    (props: ArticleNewBlockCreateProps) => {
        const { className, blockType, isOpen, onClose } = props;
        const { t } = useTranslation();
        const [title, setTitle] = useState<string>();
        const [value, setValue] = useState<string>();
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

        const onSave = useCallback(() => {}, []);
        const onCancel = useCallback(() => {}, []);
        return (
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                className={classNames('', {}, [className])}
            >
                <VStack gap="16">
                    {content}
                    <HStack justify="between" max>
                        <Button color="error" onClick={onSave}>
                            {t('Отменить')}
                        </Button>
                        <Button color="success" onClick={onCancel}>
                            {t('Сохранить')}
                        </Button>
                    </HStack>
                </VStack>
            </Modal>
        );
    },
);
