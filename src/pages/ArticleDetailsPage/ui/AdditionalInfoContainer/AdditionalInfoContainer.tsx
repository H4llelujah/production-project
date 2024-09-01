import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widget/ArticleAdditionalInfo';
import cls from './AdditionalInfoContainer.module.scss';
import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/const/router';

interface AdditionalInfoContainerProps {
    className?: string;
}

export const AdditionalInfoContainer = memo(
    (props: AdditionalInfoContainerProps) => {
        const { className } = props;
        const navigate = useNavigate();
        const article = useSelector(getArticleDetailsData);

        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleEdit(article.id));
            }
        }, [article, navigate]);

        if (!article) {
            return null;
        }

        return (
            <Card padding="24" border="partial" className={cls.card}>
                <ArticleAdditionalInfo
                    onEdit={onEditArticle}
                    author={article.user}
                    createdAt={article.createdAt}
                    views={article.views}
                    className={className}
                />
            </Card>
        );
    },
);
