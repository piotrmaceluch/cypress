Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  export class BasePage {
    
    acceptCookiesPl() {
        cy.contains('Akceptuj').click()
    }

    acceptCookiesEn() {
        cy.get('#cookie_action_accept').click()
    }
}
export const basePage = new BasePage()

