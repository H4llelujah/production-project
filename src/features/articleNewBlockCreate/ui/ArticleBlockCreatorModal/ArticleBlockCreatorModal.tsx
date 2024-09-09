import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleBlockType } from '@/entities/Article';
import { Dropdown } from '@/shared/ui/redesigned/Dropdown';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleNewBlockCreate } from '../ArticleNewBlockCreate/ArticleNewBlockCreate';

interface ArticleBlockCreatorModalProps {
    className?: string;
    onAddBlock?: (
        blockType: ArticleBlockType,
        index: number,
        value: string,
        title?: string,
    ) => void;
    index?: number;
}

export const ArticleBlockCreatorModal = memo(
    (props: ArticleBlockCreatorModalProps) => {
        const { className, onAddBlock, index } = props;
        const { t } = useTranslation();
        const [blockType, setBlockType] = useState<ArticleBlockType>(
            ArticleBlockType.TEXT,
        );
        const [isOpen, setIsOpen] = useState(false);

        const onOpen = useCallback((blockType: ArticleBlockType) => {
            setBlockType(blockType);
            setIsOpen(true);
        }, []);

        const onClose = useCallback(() => {
            setIsOpen(false);
        }, []);

        const items = [
            {
                content: t('Создать текстовый блок'),
                onClick: () => onOpen(ArticleBlockType.TEXT),
            },
            {
                content: t('Создать блок с изображением'),
                onClick: () => onOpen(ArticleBlockType.IMAGE),
            },
            {
                content: t('Создать блок с кодом'),
                onClick: () => onOpen(ArticleBlockType.CODE),
            },
        ];

        const trigger = <Text text={t('Добавить новый блок')} />;

        return (
            <>
                <Dropdown
                    className={classNames('', {}, [className])}
                    trigger={trigger}
                    items={items}
                    triggerVariant="outline"
                />
                <ArticleNewBlockCreate
                    blockType={blockType}
                    onClose={onClose}
                    isOpen={isOpen}
                    onAddBlock={onAddBlock}
                    index={index}
                />
            </>
        );
    },
);
