/// <reference types="cypress" />

describe("My first suite", () => {  //context()
    
    it("First test", () => {
        
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // by Tag Name
        cy.get('input')


        // by #ID
        cy.get('#inputEmail1')

        // by .Class name
        cy.get('.input-full-width')

        // by [Attribute] name
        cy.get('[placeholder]')

        // by [Attribute]="" name and value
        cy.get('[placeholder="Email"]')

        // by [class="value1 value2 value3"] values
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // by Tag name and Attribute with value
        cy.get('input[placeholder="Email"]')

        // by 2 different attributes
        cy.get('[placeholder="Email"][type="email"]')

        // by tag name, Attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
        
        // The most recommended way
        cy.get('[data-cy="imputEmail1"]')
        
        // Text of button
        cy.contains('Sign in')

        // Attribute + text of button
        cy.contains('[status="warning"]', 'Sign in')
    })

    it("Second test", () => {
        cy.visit('/')
        cy.contains('Forms').click()  // Click on 'Forms' button
        cy.contains('Form Layouts').click()

        // Get the element
        cy.get('[class="appearance-filled size-medium status-primary shape-rectangle transitions"]')
    })

    it("Third test", () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="customSignInButton"]')
        cy.contains('Sign in')
        cy.contains('[status="warning"]', 'Sign in')
        
        cy.get('#inputEmail3')  // Get element id for 'inputEmail3'
            .parents('form')    // which has parent 'form'
            .find('button')     // with tag 'button'
            .should('contain', 'Sign in') // which contain 'Sign in' text
            .parents('form')
            .find('.custom-checkbox')
    })
    
    it("Fourth test", () => { //it.only -> we will run only this one
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()


    })

    it.only("then and wrap methods", () => { //it.only -> we will run only this one
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //         get unique element               and store it as value firstForm
        cy.contains('nb-card', 'Using the Grid').then( firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()

            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')
        })
    })

})
