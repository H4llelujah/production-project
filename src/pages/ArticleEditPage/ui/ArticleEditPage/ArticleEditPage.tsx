import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widget/Page';
import cls from './ArticleEditPage.module.scss';
import {
    articleDetailsReducer,
    getArticleDetailsForm,
    articleDetailsActions,
} from '@/entities/Article';
import {
    DynamicModlueLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModlueLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleEditing } from '@/widget/ArticleEditing';

interface ArticleEditPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

const ArticleEditPage = (props: ArticleEditPageProps) => {
    const { className } = props;
    const article = useSelector(getArticleDetailsForm);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(articleDetailsActions.setForm());
    });

    return (
        <DynamicModlueLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
                <ArticleEditing article={article} />
            </Page>
        </DynamicModlueLoader>
    );
};

export default memo(ArticleEditPage);
