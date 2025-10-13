const {test, expect} = require('@playwright/test')
test('Handle Dialog', async ({page}) => {
    var AlertMsg;
  await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    //Register dialog
    page.on('dialog',  async alert=>{
        await page.waitForTimeout(2000)
        AlertMsg=alert.message();
        console.log("Alert :"+await alert.message())
        await alert.accept(); //Ok button
       // alert.dismiss(); //Cancel button
    })

    //click on Login 
    await page.locator("//button[text()='Log In']").click();//dialog
    expect.soft(AlertMsg).toBe('Please enter a valid user name1')
    await page.locator('#login1').fill('tester')
    await page.locator("//button[text()='Log In']").click();//dialog
    expect.soft(AlertMsg).toBe('Please enter your password1')
    await page.locator('#password').fill('srinivas')
    await page.waitForTimeout(5000)
})
