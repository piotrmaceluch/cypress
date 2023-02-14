import { get } from "cypress/types/lodash";
import { BasePage } from "./basePage";



export class MainPage extends BasePage {
  visit() {
    cy.visit("/")
    cy.title().should('eq', "Solwit - Software Development Company | IoT | Tests | Cloud Transformation | Outsourcing")
  }

  navigateToCareeraTab() {
    cy.contains('CAREER').click();
  }

  checkTitle() {
    cy.title().should('eq', 'Career – Solwit') //Career – Solwit Kariera – Solwit
  }
}
export const onMainPage = new MainPage()

