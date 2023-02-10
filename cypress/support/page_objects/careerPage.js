import { BasePage } from "./basePage";


export class CareerPage extends BasePage {
  visit() {
    cy.visit("https://solwit.com/en/career/")
  }

  checkTitles() {
    cy.title().should('eq', 'Career – Solwit') //Career – Solwit Kariera – Solwit
    cy.contains(`div[class='elementor-widget-container'] h1[class='elementor-heading-title elementor-size-default']`, 'Career')
  }

  whoAreWeLookingForSectionShouldContainRightText() {
    cy.get(`div[class='elementor-element elementor-element-ab4a1e4 elementor-widget elementor-widget-heading'] h6[class='elementor-heading-title elementor-size-default']`).contains('Who are we looking for?')
    cy.get(`div[class='elementor-element elementor-element-c6f01c0 elementor-widget elementor-widget-heading'] p[class='elementor-heading-title elementor-size-default']`).contains('Currently, we are looking only for candidates who speak Polish at least at an intermediate level. If you speak Polish well enough, take a look at our job offers')
  }
  checkRedirectionToPlOffers() {
    cy.get(`span[class='elementor-button-text']`).click()
    cy.title().should('eq', 'Kariera – Solwit')
  }

  whatWeOfferSectionShouldContainRightText() {
    cy.get(`div[class='elementor-element elementor-element-fb6ba78 elementor-widget elementor-widget-heading'] `).should('include.text', 'What we offer:')
  }

  meetTheHrTeamShouldContainRightText() {
    cy.get(`div[class='elementor-element elementor-element-3aea135 elementor-widget elementor-widget-heading'] h6[class='elementor-heading-title elementor-size-default']`).should('include.text', 'Meet the HR Team:')
  }

  checkRedirectionToFacebookPage() {
    cy.contains('Facebook')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://www.facebook.com/Solwit')
      .then(link => {
        cy.request(link.prop('href'))
          .its('status')
          .should('eq', 200)
      });
  }

  checkRedirectionToInstagramPage() {
    cy.contains('Instagram')
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://www.instagram.com/solwit_team')
      .then(link => {
        cy.request(link.prop('href'))
          .its('status')
          .should('eq', 200)
      });
  }

  checkRedirectionToLinkedInPage() {
    cy.get(`a[class='elementor-icon elementor-social-icon elementor-social-icon-linkedin elementor-repeater-item-ca65bf1']`)
      .should('have.attr', 'target', '_blank')
      .should('have.attr', 'href', 'https://www.linkedin.com/company/solwit-sa/')
  }

  checkIfTextIsVisible(text) {
    cy.scrollTo('center')
    cy.scrollTo('bottom')
    //cy.get(`div[class='elementor-element elementor-element-cd3b5dd elementor-widget elementor-widget-heading']`).scrollTo('bottom')
    cy.contains(text).should('be.visible')
  }
}

export const onCareerPage = new CareerPage()

