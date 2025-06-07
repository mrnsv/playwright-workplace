import { test } from './fixtures';

test('login', async ({ loginPage, env, capture, page }) => {
  await loginPage.login(env.USER_EMAIL_001, env.USER_PASSWORD);
  await loginPage.assertLoggedIn();
  await capture(page, 'homepage');
});

test('public_square', async ({ loginPage, publicSquarePage, env, capture }) => {
  await loginPage.login(env.USER_EMAIL_001, env.USER_PASSWORD);

  await publicSquarePage.navigateToPublicSquare();
  await publicSquarePage.assertPublicFeedVisible();
  await publicSquarePage.assertSidebarMenuVisible();
  await publicSquarePage.assertActiveLinkIsVisible();
  await publicSquarePage.scrollDown();
  await publicSquarePage.assertScrollToTopVisible();
  await publicSquarePage.assertCompanyName('ONEG8');

  await capture(publicSquarePage.page, 'public-square');
});

test('reels', async ({ loginPage, reelsPage, env, capture }) => {
  await loginPage.login(env.USER_EMAIL_001, env.USER_PASSWORD);

  await reelsPage.navigateToReels();
  await reelsPage.assertReelsFeedVisible();

  await capture(reelsPage.page, 'reels');
});

test('messages', async ({ loginPage, messagesPage, env, capture }) => {
  await loginPage.login(env.USER_EMAIL_001, env.USER_PASSWORD);

  await messagesPage.navigateToMessages();
  await messagesPage.assertMessagesContainerVisible();
  await messagesPage.assertSidebarMenuVisible();
  await messagesPage.assertActiveLinkIsMessages();
  await messagesPage.assertCompanyName('ONEG8');

  await capture(messagesPage.page, 'messages');
});
