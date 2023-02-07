describe('Real site scenario', () => {
    
    beforeEach(function() {
        cy.visit('/');
        cy.acceptCookies();
        cy.fixture('data').then( data => {
            this.data = data;
        });
    });

    it('Download File', function() {
        cy.login(this.data.user.email, this.data.user.password);
        cy.verifyUserLogin();
        cy.search(this.data.searchQueries.default);
        cy.verifySearchResultsPage();
        cy.selectSearchedBook(this.data.searchQueries.default);
        cy.verifySearchBookPage(this.data.searchQueries.default);
        cy.downloadSelectedBookPdf();
    });

});