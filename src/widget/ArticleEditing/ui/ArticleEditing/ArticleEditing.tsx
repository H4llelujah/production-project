import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleBlockCreatorModal } from '@/features/articleNewBlockCreate';
import {
    Article,
    ArticleBlockType,
    articleDetailsActions,
    ArticleType,
    renderArticleBlock,
} from '@/entities/Article';
import { ArticleCommonInfoEdit } from '@/features/ArticleCommonInfoEdit';
import { ArticleTypeSelector } from '@/features/articleTypeSelector';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ArticleEditingProps {
    className?: string;
    article?: Partial<Article>;
}

export const ArticleEditing = memo((props: ArticleEditingProps) => {
    const { className, article } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const onChangeTitle = useCallback(
        (value?: string) => {
            dispatch(
                articleDetailsActions.updateArticle({ title: value || '' }),
            );
        },
        [dispatch],
    );

    const onChangeSubtitle = useCallback(
        (value?: string) => {
            dispatch(
                articleDetailsActions.updateArticle({ subtitle: value || '' }),
            );
        },
        [dispatch],
    );

    const onChangeImg = useCallback(
        (value?: string) => {
            dispatch(articleDetailsActions.updateArticle({ img: value || '' }));
        },
        [dispatch],
    );

    const onAddBlock = useCallback(
        (
            blockType: ArticleBlockType,
            index: number,
            value: string,
            title?: string,
        ) => {
            dispatch(
                articleDetailsActions.addNewArticleBlock({
                    blockType,
                    index,
                    value,
                    title,
                }),
            );
        },
        [dispatch],
    );

    const onChangeType = useCallback(
        (value: string) => {
            dispatch(
                articleDetailsActions.updateArticleType(value as ArticleType),
            );
        },
        [dispatch],
    );

    const onDelete = useCallback(
        (blockId: string) => {
            dispatch(articleDetailsActions.deleteArticleBlock(blockId));
        },
        [dispatch],
    );
    return (
        <VStack max gap="16" className={className}>
            <Card max border="partial" padding="24">
                <VStack gap="16" max>
                    <ArticleTypeSelector
                        onChange={onChangeType}
                        types={article?.type}
                    />
                    <ArticleCommonInfoEdit
                        title={article?.title}
                        subtitle={article?.subtitle}
                        imgLink={article?.img}
                        onChangeTitle={onChangeTitle}
                        onChangeImgLink={onChangeImg}
                        onChangeSubtitle={onChangeSubtitle}
                    />
                    {article?.blocks?.map((block, index) => {
                        return (
                            <VStack gap="16" key={block.id}>
                                {renderArticleBlock(block, true, onDelete)}
                                <ArticleBlockCreatorModal
                                    index={index}
                                    onAddBlock={onAddBlock}
                                />
                            </VStack>
                        );
                    })}
                    {!article?.blocks?.length && (
                        <ArticleBlockCreatorModal
                            index={0}
                            onAddBlock={onAddBlock}
                        />
                    )}
                </VStack>
            </Card>
        </VStack>
    );
});
