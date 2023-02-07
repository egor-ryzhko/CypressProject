import './commands/asserts';
import './commands/steps';

//Turn off "V" uncaught exception handling
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('V')) {
      return false
    }
  });