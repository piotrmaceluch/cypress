import { BasePage } from "./basePage";

export class MainPage extends BasePage {
  visit() {
    cy.visit("/")
    cy.title().should('eq', "Solwit - Software Development Company | IoT | Tests | Cloud Transformation | Outsourcing")
  }

  navigateToTab(tab) {
    cy.contains(tab).click();
  }

  navigateToTab(hoverTab, tab) {
    cy.contains(hoverTab).realHover()
    cy.contains(tab).click()
    cy.get(".navbar-logo").realHover()
  }

  checkTitle() {
    cy.title().should('eq', 'Career – Solwit') //Career – Solwit Kariera – Solwit
  }
}
export const onMainPage = new MainPage()