import { onCareerPage } from "../../support/page_objects/careerPage.js"
import {onMainPage} from "../../support/page_objects/mainPage.js"

describe('Testing careera tab', () => {
  beforeEach(() => {
    onMainPage.visit()
    onMainPage.navigateToCareeraTab()
    onMainPage.acceptCookiesEn()
  })

  
  it('Career tab should contain right titles', () => {
    onCareerPage.checkTitles()
  })

  it.only('"\ Who are we looking for "\ section which doesn`t have any offers should contain right text', () => {
    onCareerPage.whoAreWeLookingForSectionShouldContainsRightText()

  })


  


   


})
