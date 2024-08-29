import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import {
    DynamicModlueLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModlueLoader';
import { Page } from '@/widget/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleRecommendationList } from '@/features/articleRecommendationList';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsPageComments } from '../ArticleDetailsPageComments/ArticleDetailsPageComments';
import { ArticleRating } from '@/features/articleRating';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('articles');

    if (!id) {
        return null;
    }

    return (
        <DynamicModlueLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <StickyContentLayout
                        content={
                            <Page
                                className={classNames(
                                    cls.ArticleDetailsPage,
                                    {},
                                    [className],
                                )}
                            >
                                <VStack gap="16" max>
                                    <DetailsContainer />
                                    <ArticleRating articleId={id} />
                                    <ArticleRecommendationList />
                                    <ArticleDetailsPageComments id={id} />
                                </VStack>
                            </Page>
                        }
                        right={<AdditionalInfoContainer />}
                    />
                }
                off={
                    <Page
                        className={classNames(cls.ArticleDetailsPage, {}, [
                            className,
                        ])}
                    >
                        <VStack gap="16" max>
                            <ArticleDetailsPageHeader />
                            <ArticleDetails id={id} />
                            <ToggleFeatures
                                feature="isArticleRatingEnabled"
                                on={<ArticleRating articleId={id} />}
                                off={
                                    <Card>
                                        {t('Оценка статей скоро появится!')}
                                    </Card>
                                }
                            />
                            <ArticleRecommendationList />
                            <ArticleDetailsPageComments id={id} />
                        </VStack>
                    </Page>
                }
            />
        </DynamicModlueLoader>
    );
};

export default ArticleDetailsPage;
