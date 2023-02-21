import { onBlogPage } from "../../support/page_objects/blogPage.js"
import { onMainPage } from "../../support/page_objects/mainPage.js"

describe('Blog tab', () => {
    beforeEach(() => {
        onMainPage.visit()
        onMainPage.acceptCookiesEn()
        onMainPage.navigateToTab('BLOG')
    })

    it('Blog tab should contain right title', () => {
       onBlogPage.getTitle().should('eq', 'Blog – Solwit')
    })

    it('Test categories of articles',()=>{
        onBlogPage.checkAllFilterCategory()
    })
})