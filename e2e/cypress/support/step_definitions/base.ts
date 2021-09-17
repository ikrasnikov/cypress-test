import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I should go to Youtube page', () => {
  cy.visit('https://www.youtube.com/');
});
