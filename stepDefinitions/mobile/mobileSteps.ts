import { Given, Then, When } from '@cucumber/cucumber';
import { Constants } from '../../commons/constants';
import home_page  from '../../pages/mobile/homePO';


Given(/^as user launch the app_$/, async () => {
  await home_page.validatePage();
});

When(/^as user I want to see home screen is displayed$/, async () => {
   expect(home_page.autbotonLeanne);
});


Then(/^as user I want to Checkmark an element$/, async () => {
  expect(home_page.autLeanne);
  await expect(home_page.Click_) 
});


Given(/^as user tap at the app$/,  () => {
   expect(home_page.validatePage()).to.be.equal(Constants.NO_MESSAGE);
});

When(/^as user I want adittion one element from my list and called "(.*?)" and validate the message "(.*?)"$/, async (addname, expected: string) => {
  await expect(home_page.autPatricia()).toBeDisplayed();
  await expect(home_page.autPatricia()).Click_();
  await expect(home_page.seeMorePatricia()).Click_();
  await expect(home_page.clickAddName()).Click_();
  await expect(home_page.addName()).setValue(addname);

  await expect(home_page.clickCreateName()).click();
  await expect(home_page.messageShow().getText()).to.be.equal(expected);

});


Given(/^as user I want delete one element of my list called "(.*?)"$/, async () => {
  await expect(home_page.autPatricia()).toBeDisplayed();
  await expect(home_page.autPatricia()).click();
  await expect(home_page.seeMorePatricia()).click();
  await expect(home_page.deleteItem()).scrollIntoView();

    /*
    describe('Scrolling in Elements', function () {
      it('should work' , function) {
        browser.saveScreenshot('button-hidden.png')
        // scroll element 
        const el = $(home_page.addName)
        browser.scrollIntoView(el.selector)
        
        browser.saveScreenshot('button-hidden.png')
      }
    })
  */
});


Then(/^as user click at the app_$/, () => {
  expect(home_page.autClementine()).toBeDisplayed();
});


Then(/^as user I want to go my list choice$/, () => {
  expect(home_page.autClementine()).toBeDisplayed();
  home_page.autClementine().click();
});

Then(/^as user I want go back for the initial screen$/, () => {
  home_page.clickBackMenu().click();
});