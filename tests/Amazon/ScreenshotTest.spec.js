const {test, expect} = require('@playwright/test')
test('Takescreenshot-desktop view', async ({page}) => {
    //open url
    await page.goto('https://www.amazon.com/');
    await page.screenshot({path:'ScreenShots/Screenshot_homepage.png'})
});
test.only('Takescreenshot-fullscreen', async ({page}) => {
    //open url
    await page.goto('https://www.amazon.com/');
   expect(await page.screenshot({fullPage:true})).toMatchSnapshot('fullPage.png');
});
test('Logo', async ({page}) => {
    //open url
    await page.goto('https://www.amazon.com/');
//    await page.locator('#nav-logo-sprites').screenshot({path:'ScreenShots/Logo.png'})
   await page.locator('#nav-logo-sprites').waitFor();
   expect(await page.locator('#nav-logo-sprites').screenshot()).toMatchSnapshot('AmazonLogo.png')
});