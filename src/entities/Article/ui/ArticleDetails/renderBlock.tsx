import { t } from 'i18next';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import cls from './ArticleDetails.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Button } from '@/shared/ui/redesigned/Button';

export const renderArticleBlock = (
    block: ArticleBlock,
    edit?: boolean,
    onDelete?: (id: string) => void,
) => {
    if (edit && onDelete) {
        switch (block.type) {
            case ArticleBlockType.TEXT:
                return (
                    <VStack gap="8">
                        <ArticleTextBlockComponent
                            block={block}
                            key={block.id}
                            className={cls.block}
                        />
                        <Button
                            color="error"
                            onClick={() => onDelete(block.id)}
                        >
                            {t('Удалить блок')}
                        </Button>
                    </VStack>
                );
            case ArticleBlockType.CODE:
                return (
                    <VStack gap="8">
                        <ArticleCodeBlockComponent
                            block={block}
                            key={block.id}
                            className={cls.block}
                        />
                        <Button
                            color="error"
                            onClick={() => onDelete(block.id)}
                        >
                            {t('Удалить блок')}
                        </Button>
                    </VStack>
                );
            case ArticleBlockType.IMAGE:
                return (
                    <VStack gap="8">
                        <ArticleImageBlockComponent
                            block={block}
                            key={block.id}
                            className={cls.block}
                        />
                        <Button
                            color="error"
                            onClick={() => onDelete(block.id)}
                        >
                            {t('Удалить блок')}
                        </Button>
                    </VStack>
                );
            default:
                return null;
        }
    }
    switch (block.type) {
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    block={block}
                    key={block.id}
                    className={cls.block}
                />
            );
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    block={block}
                    key={block.id}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    block={block}
                    key={block.id}
                    className={cls.block}
                />
            );
        default:
            return null;
    }
};
