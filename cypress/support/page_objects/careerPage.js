import { BasePage } from "./basePage";


  
  export class CareerPage extends BasePage{
    visit() {
        cy.visit("https://solwit.com/en/career/")
    }

   

    checkTitles(){
      cy.title().should('eq', 'Career – Solwit') //Career – Solwit Kariera – Solwit
      cy.contains(`div[class='elementor-widget-container'] h1[class='elementor-heading-title elementor-size-default']`,'Career')
    }

    whoAreWeLookingForSectionShouldContainRightText(){
        cy.get(`div[class='elementor-element elementor-element-ab4a1e4 elementor-widget elementor-widget-heading'] h6[class='elementor-heading-title elementor-size-default']`).contains('Who are we looking for?')
        cy.get(`div[class='elementor-element elementor-element-c6f01c0 elementor-widget elementor-widget-heading'] p[class='elementor-heading-title elementor-size-default']`).contains('Currently, we are looking only for candidates who speak Polish at least at an intermediate level. If you speak Polish well enough, take a look at our job offers')
    }
    checkRedirectionToPlOffers(){
      cy.get(`span[class='elementor-button-text']`).click()
      cy.title().should('eq','Kariera – Solwit')
    }

    whatWeOfferSectionShouldContainRightText(){
      cy.get(`div[class='elementor-element elementor-element-fb6ba78 elementor-widget elementor-widget-heading'] `).should('include.text','What we offer:')
    }
    

    meetTheHrTeamShouldContainRightText(){
      cy.get(`div[class='elementor-element elementor-element-3aea135 elementor-widget elementor-widget-heading'] h6[class='elementor-heading-title elementor-size-default']`).should('include.text','Meet the HR Team:')
    }

    youWorkAsYouPleaseTileShouldContainRightText(){
      cy.get(`div[class='elementor-element elementor-element-1b96c3d elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box'] p[class='elementor-icon-box-description']`).should('include.text','\n\t\t\t\t\t\tYou work as you please: at home, at the office, or hybrid – the choice is yours!\t\t\t\t\t')
    }

    availableTypesOfEmploymentTileShouldContainRightText(){
      cy.get(`div[class='elementor-element elementor-element-b2596dd elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box'] p[class='elementor-icon-box-description']`).should('include.text','\n\t\t\t\t\t\tAvailable types of employment: contract of employment or B2B-contracts\t\t\t\t\t')
    }

    moneyBonusesTypesOfEmploymentTileShouldContainRightText(){
      cy.get(`div[class='elementor-element elementor-element-8ddcde7 elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box'] p[class='elementor-icon-box-description']`).should('include.text','for blog articles, recommendations of new employees, sales team support, conducting training, substantive support in the recruitment process					')
    }

    developmentOpportunitiesTypesOfEmploymentTileShouldContainRightText(){
      cy.get(`div[class='elementor-element elementor-element-f179bd1 elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box'] p[class='elementor-icon-box-description']`).should('include.text','\n\t\t\t\t\t\tDevelopment opportunities:internal training (Solwit Academy of Development), acting as an internal trainer, external training, certifications, language platform, e-learning training\t\t\t\t\t')
    }

    youCanChooseAPathForYourselfTypesOfEmploymentTileShouldContainRightText(){
      cy.get(`div[class='elementor-element elementor-element-b5ae02f elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box'] p[class='elementor-icon-box-description']`).should('include.text','\n\t\t\t\t\t\tYou can choose a path for yourself – either an engineering or managerial one					')
    }

    solwitIsDogFriendlyTileShouldContainRightText(){
      cy.get(`div[class='elementor-element elementor-element-3df0f25 elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box'] p[class='elementor-icon-box-description']`).should('include.text','Solwit is dog-friendly, but above all people-friendly, as confirmed by the AudIT survey for the 3rd year in a row')
    }

    freeLargeUndergroundCarParkingTileShouldContainRightText(){
      cy.get(`div[class='elementor-element elementor-element-74a2e50 elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box'] p[class='elementor-icon-box-description']`).should('include.text','\n\t\t\t\t\t\tFree large underground car parking no need to book, no hassle\t\t\t\t\t')
    }


    forYourSafetyTileShouldContainRightText(){
      cy.get(`div[class='elementor-element elementor-element-46c894a elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box'] p[class='elementor-icon-box-description']`).should('include.text','\n\t\t\t\t\t\tFor your safety:we provide medical insurance (TU Zdrowie), life insurance, and for health - Multisport card\t\t\t\t\t')
    }

    weSupportYourPassionsTileShouldContainRightText(){
      cy.get(`div[class='elementor-element elementor-element-e7eaaef elementor-view-default elementor-mobile-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box'] p[class='elementor-icon-box-description']`).should('include.text','\n\t\t\t\t\t\tWe support your passions\n(not only in terms of sports) we fund integrations and meetings (company, team, pro-health)\t\t\t\t\t')
    }










  }
export const onCareerPage = new CareerPage()

