import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widget/Page';
import cls from './ArticleEditPage.module.scss';
import { ArticleBlockCreatorModal } from '@/features/articleNewBlockCreate';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleCommonInfoEdit } from '@/features/ArticleCommonInfoEdit';
import {
    articleDetailsReducer,
    getArticleDetailsForm,
    articleDetailsActions,
    renderArticleBlock,
    ArticleBlockType,
} from '@/entities/Article';
import {
    DynamicModlueLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModlueLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ArticleEditPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    const article = useSelector(getArticleDetailsForm);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        if (isEdit) {
            dispatch(articleDetailsActions.setForm());
        }
    });

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

    return (
        <DynamicModlueLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
                <VStack max gap="16">
                    {isEdit
                        ? `Страница редактирования статьи с id = ${id}`
                        : 'Создание новой статьи'}
                    <Card max border="partial" padding="24">
                        <VStack gap="16" max>
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
                                        {renderArticleBlock(block)}
                                        <ArticleBlockCreatorModal
                                            index={index}
                                            onAddBlock={onAddBlock}
                                        />
                                    </VStack>
                                );
                            })}
                        </VStack>
                    </Card>
                </VStack>
            </Page>
        </DynamicModlueLoader>
    );
};

export default memo(ArticleEditPage);
