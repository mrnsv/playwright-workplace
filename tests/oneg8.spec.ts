import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ENV } from '../env';

test('login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  console.log(ENV.USER_EMAIL_001, ENV.USER_PASSWORD);
  await loginPage.login(ENV.USER_EMAIL_001, ENV.USER_PASSWORD);
  await loginPage.assertLoggedIn();
  await loginPage.takeScreenshot();
});
