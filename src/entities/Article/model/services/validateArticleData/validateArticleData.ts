import { validateArticleError } from '../../consts/articleConsts';
import { Article } from '../../types/article';

export const validateArticleData = (article?: Partial<Article>) => {
    if (!article) {
        return [validateArticleError.NO_DATA];
    }
    const { title, subtitle, type, blocks, img } = article;

    const errors: validateArticleError[] = [];

    if (!title) {
        errors.push(validateArticleError.INCORRECT_TITLE);
    }

    if (!subtitle) {
        errors.push(validateArticleError.INCORRECT_SUBTITLE);
    }

    if (!img) {
        errors.push(validateArticleError.INCORRECT_IMAGE);
    }

    if (!type) {
        errors.push(validateArticleError.INCORRECT_TYPE);
    }

    if (!blocks || blocks.length === 0) {
        errors.push(validateArticleError.INCORRECT_BLOCKS);
    }

    return errors;
};
