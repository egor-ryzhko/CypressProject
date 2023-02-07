export function comparePdfFiles(expectedFilePath, receivedFilePath) {
    cy.task('parsePdf', expectedFilePath).then( expectedFile => {
        cy.task('parsePdf', receivedFilePath).then( receivedFile => {
            expect(expectedFile.text).to.be.eq(receivedFile.text);
        });
    });
}