export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { Article } from './model/types/article';

export {
    articleDetailsReducer,
    articleDetailsActions,
} from './model/slice/ArticleDetailsSlice';

export { renderArticleBlock } from './ui/ArticleDetails/renderBlock';

export {
    ArticleSortField,
    ArticleType,
    ArticleView,
    ArticleBlockType,
} from './model/consts/articleConsts';

export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { ArticleList } from './ui/ArticleList/ArticleList';

export {
    getArticleDetailsData,
    getArticleDetailsForm,
} from './model/selectors/ArticleDetails';

export { FetchArticleById } from './model/services/FetchArticleById/FetchArticleById';
