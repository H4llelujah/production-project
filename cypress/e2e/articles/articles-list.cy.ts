describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('/articles');
        });
    });
    it('И статьи успешно загружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it.skip('Заскипанный тест', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('fasfsafas');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it('На стабах (фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it('Сортирует по табу IT', () => {
        cy.intercept({
            method: 'GET',
            url: /articles\?[^]*type_like=IT/,
        }).as('fetchArticlesWithIT');
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('Tab.IT').click();
        cy.wait('@fetchArticlesWithIT');
        cy.getByTestId('ArticleListItem.Types.Paragraph').each(($el) => {
            cy.wrap($el[0]).should('include.text', 'IT');
        });
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it('Сортирует по просмотрам(возрастанию и убыванию)', () => {
        cy.intercept({
            method: 'GET',
            url: /articles\?[^]*sort=views/,
        }).as('fetchArticlesSortViews');
        cy.intercept({
            method: 'GET',
            url: /articles\?[^]*order=desc/,
        }).as('fetchArticlesOrederDesc');
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('SortSelectButton').select('просмотрам');
        cy.wait('@fetchArticlesSortViews');
        cy.getByTestId('ArticleListItem.Views.Paragraph').then(($elements) => {
            const texts = $elements
                .toArray()
                .map((el) => Cypress.$(el).text().trim());
            const numbers = texts.map((text) => Number(text));
            // eslint-disable-next-line no-plusplus
            for (let i = 1; i < numbers.length; i++) {
                expect(numbers[i]).to.be.gte(numbers[i - 1]);
            }
        });
        cy.getByTestId('OrderSelectButton').select('убыванию');
        cy.wait('@fetchArticlesOrederDesc');
        cy.getByTestId('ArticleListItem.Views.Paragraph').then(($elements) => {
            const texts = $elements
                .toArray()
                .map((el) => Cypress.$(el).text().trim());
            const numbers = texts.map((text) => Number(text));
            // eslint-disable-next-line no-plusplus
            for (let i = 1; i < numbers.length; i++) {
                expect(numbers[i]).to.be.lte(numbers[i - 1]);
            }
        });
    });
});
