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

  it('Tiles should contain right text',()=>{
    onCareerPage.checkIfTileContainsRightText()
    onCareerPage.availableTypesOfEmploymentTileShouldContainRightText()
    onCareerPage.moneyBonusesTypesOfEmploymentTileShouldContainRightText()
    onCareerPage.developmentOpportunitiesTypesOfEmploymentTileShouldContainRightText()
    onCareerPage.youCanChooseAPathForYourselfTypesOfEmploymentTileShouldContainRightText()
    onCareerPage.solwitIsDogFriendlyTileShouldContainRightText()
    onCareerPage.freeLargeUndergroundCarParkingTileShouldContainRightText()
    onCareerPage.forYourSafetyTileShouldContainRightText()
    onCareerPage.weSupportYourPassionsTileShouldContainRightText()
  })

  it('#SolwitTeam should contain right text',()=>{
    onCareerPage.solwitTeamShouldContainRightText()
  })

  it('To find out more about working should contain right text',()=>{
    onCareerPage.toFindOutMoreAboutWorking()
  })

  it.only('Check redirection to Facebook/Instagram/LinkedIn pages',()=>{
    onCareerPage.checkRedirectionToFacebookPage()
    onCareerPage.checkRedirectionToInstagramPage()
    onCareerPage.checkRedirectionToLinkedInPage()
  })

})
