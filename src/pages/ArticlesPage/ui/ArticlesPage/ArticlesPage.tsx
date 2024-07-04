import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModlueLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModlueLoader';
import { Page } from 'widget/Page';
import { useSearchParams } from 'react-router-dom';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import {
    getArticlesPageError, getArticlesPageInit, getArticlesPageIsLoading, getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticle } from '../../model/services/fetchNextArticle/fetchNextArticle';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const [search] = useSearchParams();

    const onScrollEnd = useCallback(() => {
        dispatch(fetchNextArticle());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(search));
    }, []);

    return (
        <DynamicModlueLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onScrollEnd} className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticlesPageFilters className={cls.filters} />
                <ArticleInfiniteList />
            </Page>
        </DynamicModlueLoader>
    );
};

export default memo(ArticlesPage);
