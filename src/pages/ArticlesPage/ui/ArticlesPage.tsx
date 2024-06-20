import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModlueLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModlueLoader';
import { Page } from 'shared/ui/Page/Page';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer, getArticles, articlePageActions } from '../model/slice/articlesPageSlice';
import {
    getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { fetchArticleList } from '../model/services/fetchArticleList/fetchArticleList';
import { fetchNextArticle } from '../model/services/fetchNextArticle/fetchNextArticle';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const dispatch = useAppDispatch();

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    const onScrollEnd = useCallback(() => {
        dispatch(fetchNextArticle());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlePageActions.initState());
        dispatch(fetchArticleList(
            { page: 1 },
        ));
    }, []);

    return (
        <DynamicModlueLoader reducers={reducers} removeAfterUnmount>
            <Page onScrollEnd={onScrollEnd} className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector className={cls.viewSelector} view={view} onViewChange={onChangeView} />
                <ArticleList
                    view={view}
                    articles={articles}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModlueLoader>
    );
};

export default memo(ArticlesPage);
