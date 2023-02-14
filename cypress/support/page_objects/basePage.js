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

    navigateToAboutUsManagementTab() {
        cy.get(".dropdown-onas").realClick()
        cy.contains("Management").click()
      }

      

}
export const basePage = new BasePage()

