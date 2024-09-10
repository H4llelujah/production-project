import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleBlockCreatorModal } from '@/features/articleNewBlockCreate';
import {
    Article,
    ArticleBlockType,
    articleDetailsActions,
    ArticleType,
    createArticleData,
    renderArticleBlock,
    updateArticleData,
} from '@/entities/Article';
import { ArticleCommonInfoEdit } from '@/features/ArticleCommonInfoEdit';
import { ArticleTypeSelector } from '@/features/articleTypeSelector';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/redesigned/Button';

interface ArticleEditingProps {
    className?: string;
    article?: Partial<Article>;
    isEdit?: Boolean;
}

export const ArticleEditing = memo((props: ArticleEditingProps) => {
    const { className, article, isEdit } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

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

    const onSaveArticle = useCallback(() => {
        if (isEdit) {
            dispatch(updateArticleData());
            navigate('/articles');
        } else {
            dispatch(createArticleData());
            navigate('/articles');
        }
    }, [dispatch, isEdit, navigate]);

    const onCancelEdit = useCallback(() => {
        dispatch(articleDetailsActions.onCancelEdit());
        navigate('/articles');
    }, [dispatch, navigate]);

    return (
        <VStack max gap="16" className={className}>
            <HStack justify="between" max>
                <Button onClick={onCancelEdit} color="error">
                    {t('Отменить')}
                </Button>
                <Button onClick={onSaveArticle} color="success">
                    {t('Сохранить')}
                </Button>
            </HStack>
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
