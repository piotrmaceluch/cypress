import { onCareerPage } from "../../support/page_objects/careerPage.js"
import { onMainPage } from "../../support/page_objects/mainPage.js"

describe('Career tab', () => {
  beforeEach(() => {
    onMainPage.visit()
    onMainPage.navigateToTab('CAREER')
    onMainPage.acceptCookiesEn()
  })

  const whatWeOfferSection = `div[class='elementor-element elementor-element-fb6ba78 elementor-widget elementor-widget-heading']`
  const whoAreWeLookingForSection = `div[class='elementor-element elementor-element-ab4a1e4 elementor-widget elementor-widget-heading'] h6[class='elementor-heading-title elementor-size-default']`
  const offersOnlyForPolishSpeakingPeople = `div[class='elementor-element elementor-element-c6f01c0 elementor-widget elementor-widget-heading'] p[class='elementor-heading-title elementor-size-default']`
  const meetTheHrTeamSection = `div[class='elementor-element elementor-element-3aea135 elementor-widget elementor-widget-heading'] h6[class='elementor-heading-title elementor-size-default']`
  const textForCareerTab = 'cypress\\e2e\\topNavBar\\careerTabTexts.json'

  it('Career tab should contain correct titles', () => {
    onCareerPage.checkTitles().should('eq', 'Career – Solwit')
  })

  it('"\Who are we looking for"\ section should contain correct text', () => {
    onCareerPage.sectionShouldContainCorrectText(whoAreWeLookingForSection).should('include.text', 'Who are we looking for?')
    cy.readFile(textForCareerTab).then(obj => {
      cy.get(offersOnlyForPolishSpeakingPeople).contains(obj.CareerTab.WhoAreWeLookingFor).should('be.visible')
    })
  })

  it('Check redirection to Polish offers', () => {
    onCareerPage.checkRedirectionToPlOffers().should('eq', 'Kariera – Solwit')
  })

  it('"\What we offer"\ section should contain correct text', () => {
    onCareerPage.sectionShouldContainCorrectText(whatWeOfferSection).should('include.text', 'What we offer:')
  })

  it('"\Meet the HR team"\ section should contain correct text', () => {
    onCareerPage.sectionShouldContainCorrectText(meetTheHrTeamSection).should('include.text', 'Meet the HR Team:')
  })

  it('Tiles should contain correct text', () => {
    onCareerPage.getTextFromAllTilesFromSectionWhatWeOffer().each(($el, index) => {
      cy.readFile(textForCareerTab).its(`CareerTab.WhatWeOfferSection[${index}].Text`).should('eq', $el.text().replace(/[\n\t]/g, ''))
    })
  })

  it('Check redirection to Facebook/Instagram/LinkedIn pages', () => {
    onCareerPage.checkRedirectionToFacebookPage().should('eq', 200)
    onCareerPage.checkRedirectionToInstagramPage().should('eq', 200)
    onCareerPage.checkRedirectionToLinkedInPage().should('have.attr', 'target', '_blank').should('have.attr', 'href', 'https://www.linkedin.com/company/solwit-sa/')
  })

  it('#SolwitTeam section should contain correct text', () => {
    cy.readFile(textForCareerTab).its(`CareerTab.#SolwitTeam`).then(text=>{
      onCareerPage.checkIfTextIsVisible(text).should('be.visible')
    })
  })

  it('Check redirection to recruiters`s LinkedIn from all visible recruiters',()=>{
    onCareerPage.checkFilterCategory().should('have.length', 18).and('not.be.disabled').and('be.visible')
  })
})
