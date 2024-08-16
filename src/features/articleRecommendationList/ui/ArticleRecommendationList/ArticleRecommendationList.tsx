import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationList } from '../../api/ArticleRecommendationApi';

interface ArticleRecommendationListProps {
    className?: string;
}

export const ArticleRecommendationList = memo(
    (props: ArticleRecommendationListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            isLoading,
            data: articles,
            error,
        } = useArticleRecommendationList(3);

        if (isLoading || error || !articles) {
            return null;
        }

        return (
            <VStack
                data-testid="ArticleRecommendationList"
                gap="8"
                className={classNames('', {}, [className])}
            >
                <Text title={t('Рекомендуем')} />
                <ArticleList
                    articles={articles}
                    isLoading={isLoading}
                    target="_blank"
                />
            </VStack>
        );
    },
);
