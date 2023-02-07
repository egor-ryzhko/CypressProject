import locators from '../selectors';

Cypress.Commands.add('verifyUserLogin', () => {
    cy.get(locators.loggedInUserHeader).invoke('text').should('equal', 'My Profile');
});

Cypress.Commands.add('verifySearchResultsPage', () => {
    cy.get(locators.searchResultsHeader).invoke('text').then( text => text.trim()).should('equal', 'Search Results');
});

Cypress.Commands.add('verifySearchBookPage', (bookTitle) => {
    cy.get(locators.searchBookHeader).invoke('text').should('equal', bookTitle);
});

