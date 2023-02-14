import { AboutUsPage, onAboutUsPage } from "../support/page_objects/aboutUsPage";

Cypress.once('uncaught:exception', (err, runnable) => {
    return false;
  })
  
  
  describe('about us tabs should be visible', () => {
    it.only('should see "about us" tab', () => {
        cy.visit("/")
        onAboutUsPage.acceptCookiesPl()
        onAboutUsPage.navigateToAboutUsManagementTab()
        // cy.contains('h1','About us')
    })
    
    it('should see "management" tab', () => {
        cy.visit('/about-us/#management')
        cy.contains('h2','Management')
    })

    it('should see "culture and policies" tab', () => {
        cy.visit('/about-us/culture-and-policies/')
        cy.contains('h1','Culture and Policies')
    })

    it('should see "partnerships" tab', () => {
        cy.visit('/about-us/#partnerships')
        cy.contains('h2','PARTNERSHIPS')
    })

    it('should see "solwits social responsibility" tab', () => {
        cy.visit('/about-us/solwits-social-responsibility/')
        cy.contains('h1','Solwit’s social responsibility')
    })

    it('should see "solwit group" tab', () => {
        cy.visit('/about-us/#solwit-group')
        cy.contains('h2','Solwit S.A. subsidiary')
    })

    it('should see correct content about CEO', () => {
        cy.visit('/about-us/#management')
        cy.get('.icon-right-arrow2').first().click()
        cy.contains('h1','Leszek Pankiewicz')
        cy.contains('p','A graduate of the Faculty of Electronics')        
        
    })

  })
  


