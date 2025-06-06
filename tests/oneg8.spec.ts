import { test, expect } from './fixtures';

test('login', async ({ loginPage, env, capture, page }) => {
  await loginPage.login(env.USER_EMAIL_001, env.USER_PASSWORD);
  await loginPage.assertLoggedIn();
  await capture(page, 'homepage');
});

test('public_square', async ({ loginPage, publicSquarePage, env, capture }) => {
  await loginPage.login(env.USER_EMAIL_001, env.USER_PASSWORD);

  await publicSquarePage.navigateToPublicSquare();
  await publicSquarePage.assertPublicFeedVisible();
  await publicSquarePage.scrollDown();
  await publicSquarePage.assertScrollToTopVisible();

  await capture(publicSquarePage.page, 'public-square');
});
