import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widget/Page';
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
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);
    const article = useSelector(getArticleDetailsForm);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(articleDetailsActions.setForm(isEdit));
    });

    return (
        <DynamicModlueLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames('', {}, [className])}>
                <ArticleEditing article={article} isEdit={isEdit} />
            </Page>
        </DynamicModlueLoader>
    );
};

export default memo(ArticleEditPage);
