import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModlueLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModlueLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';
import CaledarIcon from '@/shared/assets/icons/calendar-icon.svg';
import EyeIcon from '@/shared/assets/icons/eye-icon.svg';
import { Icon } from '@/shared/ui/Icon';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from '@/shared/ui/Stack';
import { articleDetailsReducer } from '../../model/slice/ArticleDetailsSlice';
import { FetchArticleById } from '../../model/services/FetchArticleById/FetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/ArticleDetails';
import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import cls from './ArticleDetails.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('/articles');
    const article = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(FetchArticleById(id));
    }, [id, dispatch]);

    const renderBlock = useCallback((block: ArticleBlock) => {
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
    }, []);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton className={cls.title} width={200} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке статьи!')}
            />
        );
    } else {
        content = (
            <>
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar
                        src={article?.img}
                        size={200}
                        className={cls.avatar}
                    />
                </HStack>
                <VStack gap="4" max data-testid="ArticleDetails.Info">
                    <Text
                        className={cls.title}
                        title={article?.title}
                        text={article?.subtitle}
                        size={TextSize.L}
                    />
                    <HStack gap="8">
                        <Icon className={cls.icon} Svg={EyeIcon} />
                        <Text text={String(article?.views)} />
                    </HStack>
                    <HStack gap="8">
                        <Icon className={cls.icon} Svg={CaledarIcon} />
                        <Text text={article?.createdAt} />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModlueLoader reducers={reducers} removeAfterUnmount>
            <VStack
                max
                gap="16"
                className={classNames(cls.ArticleDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModlueLoader>
    );
});
