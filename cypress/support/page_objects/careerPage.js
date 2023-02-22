import { BasePage } from "./basePage";


export class CareerPage extends BasePage {
  visit() {
    cy.visit("https://solwit.com/en/career/")
  }

  checkTitles() {
    return cy.title()
    //cy.contains(`div[class='elementor-widget-container'] h1[class='elementor-heading-title elementor-size-default']`, 'Career')
  }


  checkRedirectionToPlOffers() {
    cy.get(`span[class='elementor-button-text']`).click()
    return cy.title()
  }

  sectionShouldContainCorrectText(section) {
    return cy.get(section)
  }

  shouldContainCorrectTextSectionMeetTheHrTeam() {
    return cy.get(`div[class='elementor-element elementor-element-3aea135 elementor-widget elementor-widget-heading'] h6[class='elementor-heading-title elementor-size-default']`)
  }

  checkRedirectionToFacebookPage() {
    return cy.contains('Facebook')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://www.facebook.com/Solwit')
      .then(link => {
        cy.request(link.prop('href'))
          .its('status')

      });
  }

  checkRedirectionToInstagramPage() {
    return cy.contains('Instagram')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://www.instagram.com/solwit_team')
      .then(link => {
        cy.request(link.prop('href'))
          .its('status')
      });
  }

  checkRedirectionToLinkedInPage() {
    return cy.get(`a[class='elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-ca65bf1']`)

  }

  checkIfTextIsVisible(text) {
    return cy.contains(text).scrollIntoView()
  }

  getTextFromAllTilesFromSectionWhatWeOffer() {
    return cy.get(`p[class="elementor-icon-box-description"]`)
  }

  checkFilterCategory() {
    return cy.get(`a[href*='https://www.linkedin.com/in/']`)
  }

}






export const onCareerPage = new CareerPage()

