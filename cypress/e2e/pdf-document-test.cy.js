import { comparePdfFiles } from '../support/utils';

const pdfFilesPath = {
    expected: './documents/expected/initial_document.pdf',
    receivedIncorrect: './documents/received/incorrect_document.pdf',
    receivedCorrect: './documents/received/correct_document.pdf'
}

describe('Check pdf files', () => {
    
    it('Compare 2 pdf documents', () => {
        comparePdfFiles(pdfFilesPath.expected, pdfFilesPath.receivedCorrect);
        // comparePdfFiles(pdfFilesPath.expected, pdfFilesPath.receivedIncorrect);
    });

});