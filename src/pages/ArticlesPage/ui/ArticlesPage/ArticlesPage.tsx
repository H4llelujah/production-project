import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModlueLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModlueLoader';
import { Page } from 'widget/Page';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getArticlesPageError } from '../../model/selectors/articlesPageSelectors';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
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
    const error = useSelector(getArticlesPageError);

    const onScrollEnd = useCallback(() => {
        if (!error) {
            dispatch(fetchNextArticle());
        }
    }, [dispatch, error]);

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
