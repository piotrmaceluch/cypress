Cypress.once('uncaught:exception', (err, runnable) => {
    return false;
  })
  
  
  describe('about us tabs should be visible', () => {
    it('should see "about us" tab', () => {
      cy.visit('/about-us')
      cy.get('#cookie_action_accept').click()
      cy.contains('h1','About us')
    })
    
    it.only('should see "management" tab', () => {
        cy.visit('/about-us/#management')
        cy.get('#cookie_action_accept').click()
        cy.contains('h2','Management')
        // cy.contains('.elementor-heading-title','Leszek Pankiewicz')
        // cy.contains('.elementor-heading-title','MACIEJ PUCHALSKI')
    })

    it('should see "culture and policies" tab', () => {
        cy.visit('/about-us/culture-and-policies/')
        cy.get('#cookie_action_accept').click()
        cy.contains('h1','Culture and Policies')
    })

    it('should see "partnerships" tab', () => {
        cy.visit('/about-us/#partnerships')
        cy.get('#cookie_action_accept').click()
        cy.contains('h2','PARTNERSHIPS')
    })

    it('should see "solwits social responsibility" tab', () => {
        cy.visit('/about-us/solwits-social-responsibility/')
        cy.get('#cookie_action_accept').click()
        cy.contains('h1','Solwit’s social responsibility')
    })

    it('should see "solwit group" tab', () => {
        cy.visit('/about-us/#solwit-group')
        cy.get('#cookie_action_accept').click()
        cy.contains('h2','Solwit S.A. subsidiary')
    })


  })
  