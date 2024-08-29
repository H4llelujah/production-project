import { ArticleBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import cls from './ArticleDetails.module.scss';

export const renderArticleBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    block={block}
                    key={block.id}
                    className={cls.block}
                />
            );
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    block={block}
                    key={block.id}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    block={block}
                    key={block.id}
                    className={cls.block}
                />
            );
        default:
            return null;
    }
};
