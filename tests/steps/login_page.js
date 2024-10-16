// @ts-check
const { test, expect } = require('@playwright/test');
const loginObs = require('../../objects/loginPage.json')



async function loginInput(username, password, loginMsg) {
  test('input username password and click login', async ({ page }, testInfor) => {
    await page.goto('/');
    await page.locator(loginObs.userfield).fill(username);
    await page.locator(loginObs.passwordfield).fill(password);
    await page.locator(loginObs.loginBtn).click();
    await expect(page.locator(loginObs.loginMsg)).toHaveText(loginMsg);

    await testInfor.attach("login", {
      body: await page.screenshot(),
      contentType: "image/png",
    })

  })
}

module.exports = { loginInput }

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
