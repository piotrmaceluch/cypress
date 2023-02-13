import { BasePage } from "./basePage";

export class BlogPage extends BasePage {
    visit() {
        cy.visit("https://solwit.com/en/blog/")
    }

    checkTitles() {
        cy.title().should('eq', 'Blog – Solwit')
        cy.contains(`div[class='elementor-widget-container'] h1[class='elementor-heading-title elementor-size-default']`, 'Welcome to our Blog!')
    }

    checkAllFilterCategory() {
        this.#checkFilterCategory('Cloud services', 'tag-cloud-services-en')
        this.#checkFilterCategory('IoT Solutions', 'tag-iot-solutions-en')
        this.#checkFilterCategory('News', 'tag-news-en')
        this.#checkFilterCategory('Outsourcing', 'tag-outsourcing-en')
        this.#checkFilterCategory('Software development', 'tag-software-development')
        this.#checkFilterCategory('Solwit Team', 'tag-solwit-team-en')
        this.#checkFilterCategory('Tests', 'tag-tests-en-2')




    }

    #checkFilterCategory(category, className) {

        cy.contains(`label[class='sf-label-radio']`[3]).click()
        cy.get(`[class$=${className}]`)
            .invoke('attr', 'class')
            .should('contain', 'elementor-post elementor-grid-item')
            .should('have.length.greaterThan', 1)
        cy.contains(category).click()
    }
}
export const onBlogPage = new BlogPage()