import { onCareerPage } from "../../support/page_objects/careerPage.js"
import {onMainPage} from "../../support/page_objects/mainPage.js"

describe('Testing careera tab', () => {
  beforeEach(() => {
    onMainPage.visit()
    onMainPage.navigateToCareeraTab()
    onMainPage.acceptCookiesEn()
  })

  
  it('Career tab contains right titles', () => {
    onCareerPage.checkTitles()
  })

  it('Who are we looking for section doesnt have any offers', () => {
    onCareerPage.whoAreWeLookingForSectionShouldContainsRightText()

  })


  


   


})
