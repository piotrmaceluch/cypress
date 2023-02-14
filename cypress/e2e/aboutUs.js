import { onAboutUsPage } from "../support/page_objects/aboutUsPage";
import { onMainPage } from "../support/page_objects/mainPage";
Cypress.once('uncaught:exception', (err, runnable) => {
    return false;
  })
  
  
  describe('about us tabs should be visible', () => {
    beforeEach(() => {
        onMainPage.visit()
        onMainPage.acceptCookiesEn()
    })
    
    it('should see "about us" tab', () => {
        onMainPage.navigateToTab("ABOUT US +","About us")
        cy.contains('h1','About us')
    })
    
    it('should see "management" tab', () => {
        onMainPage.navigateToTab("ABOUT US +", "Management")
        cy.contains('h2','Management')
    })

    it('should see "culture and policies" tab', () => {
        onMainPage.navigateToTab("ABOUT US +", "Culture and policies")
        cy.contains('h1','Culture and Policies')
    })

    it('should see "partnerships" tab', () => {
        onMainPage.navigateToTab("ABOUT US +", "Partnerships")
        cy.contains('h2','PARTNERSHIPS')
    })

    it('should see "solwits social responsibility" tab', () => {
        onMainPage.navigateToTab("ABOUT US +", "Social Responsibility")
        cy.contains('h1','Solwit’s social responsibility')
    })

    it('should see "solwit group" tab', () => {
        onMainPage.navigateToTab("ABOUT US +", "Solwit Group")
        cy.contains('h2','Solwit S.A. subsidiary')
    })

    it('should see correct content about CEO', () => {
        onMainPage.navigateToTab("ABOUT US +", "Management")
        cy.get('.icon-right-arrow2').first().click()
        cy.contains('h1','Leszek Pankiewicz')
        cy.contains('p','A graduate of the Faculty of Electronics')
    })

  })
  