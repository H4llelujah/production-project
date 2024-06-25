import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsPageRecommendationsReducer } from './ArticleDetailsPageRecommendationsSlice';
import { ArticleDetailsCommentsReducer } from './ArticleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: ArticleDetailsCommentsReducer,
});
