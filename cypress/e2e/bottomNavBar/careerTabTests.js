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

  it('"\ Who are we looking for "\ section which doesn`t have any offers should contain right text', () => {
    onCareerPage.whoAreWeLookingForSectionShouldContainRightText()
  })

  it('Check redirection to Polish offers',()=>{
    onCareerPage.checkRedirectionToPlOffers()
  })

  it('"\What we offer"\ section should contain right text',()=>{
    onCareerPage.whatWeOfferSectionShouldContainRightText()
  })

  it('"\Meet the HR team "\ section should contain right text',()=>{
    onCareerPage.meetTheHrTeamShouldContainRightText()
  })

  it('"\You work as you please"\ tile should contain right text',()=>{
    onCareerPage.availableTypesOfEmploymentTileShouldContainRightText()
  })

  it('"\Available types of employment"\ tile should contain right text',()=>{
    onCareerPage.availableTypesOfEmploymentTileShouldContainRightText()
  })

  it('"\Money bonuses"\ tile should contain right text',()=>{
    onCareerPage.moneyBonusesTypesOfEmploymentTileShouldContainRightText()
  })

  it('"\Development opportunities"\ tile should contain right text',()=>{
    onCareerPage.developmentOpportunitiesTypesOfEmploymentTileShouldContainRightText()
  })

  it('"\You can choose a path for yourself"\ tile should contain right text',()=>{
    onCareerPage.youCanChooseAPathForYourselfTypesOfEmploymentTileShouldContainRightText()
  })

  it('"\Solwit is dog-friendly"\ tile should contain right text',()=>{
    onCareerPage.solwitIsDogFriendlyTileShouldContainRightText()
  })

  it('"\Free large underground car parking"\ tile should contain right text',()=>{
    onCareerPage.freeLargeUndergroundCarParkingTileShouldContainRightText()
  })

  it('"\For your safety"\ tile should contain right text',()=>{
    onCareerPage.forYourSafetyTileShouldContainRightText()
  })

  it('"\We support your passions"\ tile should contain right text',()=>{
    onCareerPage.weSupportYourPassionsTileShouldContainRightText()
  })


  


   


})
