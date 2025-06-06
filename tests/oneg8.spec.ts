import { test } from './fixtures';

test('login', async ({ loginPage, env, capture, page }) => {
  await loginPage.goto();
  console.log(env.USER_EMAIL_001, env.USER_PASSWORD);
  await loginPage.login(env.USER_EMAIL_001, env.USER_PASSWORD);
  await loginPage.assertLoggedIn();
  await capture(page, 'homepage');
});
