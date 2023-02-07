import locators from '../selectors';
import config from '../../../config/config.json';

Cypress.Commands.add('login', (email, password) => {
    //Added wait because the login form doesn't open without it
    cy.get(locators.loginFormButton).click().wait(config.timeouts.base);
    cy.get(locators.emailInput).type(email);
    cy.get(locators.passwordInput).type(password);
    cy.get(locators.continueButton).click();
});

Cypress.Commands.add('acceptCookies', () => {
    cy.get(locators.acceptCookiesButton).click();
});

Cypress.Commands.add('search', (query) => {
    cy.get(locators.searchInput).type(query);
    cy.get(locators.searchButton).click();
});

Cypress.Commands.add('selectSearchedBook', (bookTitle) => {
    cy.get(locators.searchBooksList).find(locators.searchBookTitleItem).contains(bookTitle).click();
});

Cypress.Commands.add('downloadSelectedBookPdf', () => {
    cy.get(locators.downloadBookButton).click();
    cy.get(locators.selectFormatButton).contains('Pdf').click();
});