import { BasePage } from "./basePage";



export class AboutUsPage extends BasePage {
  visitAboutUsTab() {
    // cy.visit("/about-us")
    // cy.title().should('eq', "About us - Solwit")
  }

}
export const onAboutUsPage = new AboutUsPage()