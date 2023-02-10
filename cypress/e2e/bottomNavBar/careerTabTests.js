import { onCareerPage } from "../../support/page_objects/careerPage.js"
import {onMainPage} from "../../support/page_objects/mainPage.js"

describe('Career tab', () => {
  beforeEach(() => {
    onMainPage.visit()
    onMainPage.navigateToCareerTab()
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

  it.only('Tiles should contain right text',()=>{
    onCareerPage.checkIfTextIsVisible(`You work as you please: at home, at the office, or hybrid – the choice is yours!`);
    onCareerPage.checkIfTextIsVisible(`Available types of employment: contract of employment or B2B-contracts`);
    onCareerPage.checkIfTextIsVisible(`Money bonuses: for blog articles, recommendations of new employees, sales team support, conducting training, substantive support in the recruitment process`);
    onCareerPage.checkIfTextIsVisible(`Development opportunities:internal training (Solwit Academy of Development), acting as an internal trainer, external training, certifications, language platform, e-learning training`);
    onCareerPage.checkIfTextIsVisible(`You can choose a path for yourself – either an engineering or managerial one`);
    onCareerPage.checkIfTextIsVisible(`Solwit is dog-friendly, but above all people-friendly, as confirmed by the AudIT survey for the 3rd year in a row`);
    onCareerPage.checkIfTextIsVisible(`Free large underground car parking no need to book, no hassle`);
    onCareerPage.checkIfTextIsVisible(`For your safety:we provide medical insurance (TU Zdrowie), life insurance, and for health - Multisport card`);
    onCareerPage.checkIfTextIsVisible(`We support your passions (not only in terms of sports) we fund integrations and meetings (company, team, pro-health)`);
  })

  it('#SolwitTeam should contain right text',()=>{
    onCareerPage.solwitTeamShouldContainRightText()
  })

  it('To find out more about working should contain right text',()=>{
    onCareerPage.toFindOutMoreAboutWorking()
  })

  it('Check redirection to Facebook/Instagram/LinkedIn pages',()=>{
    onCareerPage.checkRedirectionToFacebookPage()
    onCareerPage.checkRedirectionToInstagramPage()
    onCareerPage.checkRedirectionToLinkedInPage()
  })


})
