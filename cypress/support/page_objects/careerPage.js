import { BasePage } from "./basePage";


  
  export class CareerPage extends BasePage{
    visit() {
        cy.visit("https://solwit.com/en/career/")
    }

   

    checkTitles(){
      cy.title().should('eq', 'Career – Solwit') //Career – Solwit Kariera – Solwit
      cy.contains('h1','Career')
    }

    whoAreWeLookingForSectionShouldContainsRightText(){
        cy.contains('Who are we looking for?')
        cy.get('elementor-heading-title elementor-size-default').contains('Currently, we are looking ')
    }
}
export const onCareerPage = new CareerPage()

