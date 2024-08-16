export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { authorization: 'dsa' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 22,
            currency: 'RUB',
            country: 'Armenia',
            city: 'Moskow',
            username: 'testuser',
            avatar: 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
