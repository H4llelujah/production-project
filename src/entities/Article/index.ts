export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { Article } from './model/types/article';

export { articleDetailsReducer } from './model/slice/ArticleDetailsSlice';

export {
    ArticleSortField,
    ArticleType,
    ArticleView,
    ArticleBlockType,
} from './model/consts/articleConsts';

export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { ArticleList } from './ui/ArticleList/ArticleList';

export { getArticleDetailsData } from './model/selectors/ArticleDetails';
