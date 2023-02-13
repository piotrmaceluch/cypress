import { onBlogPage } from "../../support/page_objects/blogPage.js"
import { onMainPage } from "../../support/page_objects/mainPage.js"

describe('Blog tab', () => {
    beforeEach(() => {
        onMainPage.visit()
        onMainPage.acceptCookiesEn()
        onMainPage.navigateToTab('BLOG')
    })

    it('Blog tab should contain right titles', () => {
        onBlogPage.checkTitles()
    })

    it.only('Test categories of articles',()=>{
        onBlogPage.checkAllFilterCategory()
    })
})