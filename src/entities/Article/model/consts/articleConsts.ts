export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

export enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE',
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}
export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export enum validateArticleError {
    INCORRECT_TITLE = 'INCORRECT_TITLE',
    INCORRECT_SUBTITLE = 'INCORRECT_SUBTITLE',
    INCORRECT_IMAGE = 'INCORRECT_IMAGE',
    INCORRECT_TYPE = 'INCORRECT_TYPE',
    INCORRECT_BLOCKS = 'INCORRECT_BLOCKS',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}
