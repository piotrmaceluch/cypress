import { BasePage } from "./basePage";


  
  export class CareerPage extends BasePage{
    visit() {
        cy.visit("https://solwit.com/en/career/")
    }

   

    checkTitles(){
      cy.title().should('eq', 'Career – Solwit') //Career – Solwit Kariera – Solwit
      cy.contains(`div[class='elementor-widget-container'] h1[class='elementor-heading-title elementor-size-default']`,'Career')
    }

    whoAreWeLookingForSectionShouldContainsRightText(){
        cy.get(`div[class='elementor-element elementor-element-ab4a1e4 elementor-widget elementor-widget-heading'] h6[class='elementor-heading-title elementor-size-default']`).contains('Who are we looking for?')
        //cy.get(`div[class='elementor-element elementor-element-c6f01c0 elementor-widget elementor-widget-heading'] p[class='elementor-heading-title elementor-size-default']`).contains('Currently, we are looking only for candidates who speak Polish at least at an intermediate level. If you speak Polish well enough, take a look at our job offers')
        cy.get(`div[class='elementor-element elementor-element-c6f01c0 elementor-widget elementor-widget-heading'] p[class='elementor-heading-title elementor-size-default']`).should('','Currently, we are looking only for candidates who speak Polish at least at an intermediate level.\n\nIf you speak Polish well enough, take a look at our job offers.')
    }
}
export const onCareerPage = new CareerPage()

