import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'TESTING',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://habrastorage.org/getpro/habr/upload_files/784/040/572/784040572c499a4b59cbf7ce8d06e31e.png',
    views: 202242,
    createdAt: '1.06.2022',
    userId: '1',
    type: [
        'IT',
    ],
    blocks: [],
};

export const createArticle = (article: Article) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { authorization: 'dsa' },
        body: article ?? defaultArticle,
    }).then((res) => res.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { authorization: 'dsa' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
