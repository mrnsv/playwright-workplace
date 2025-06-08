import { SearchSidebarPage } from '../pages/SearchSidebarPage';
import { test, expect  } from './fixtures';

test('login', async ({ loginPage, env, capture, page }) => {
  await loginPage.login(env.USER_EMAIL_001, env.USER_PASSWORD);
  await loginPage.assertLoggedIn();
  await capture(page, 'homepage');
});

test('public_square', async ({ loginPage, publicSquarePage, env, capture }) => {
  await loginPage.login(env.USER_EMAIL_001, env.USER_PASSWORD);

  await publicSquarePage.navigateToPublicSquare();
  await publicSquarePage.assertPublicFeedVisible();
  await publicSquarePage.assertDefaultSidebarItemsPresent();
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

test('profile_page', async ({ loginPage, profilePage, env, capture }) => {
  await loginPage.login(env.USER_EMAIL_001, env.USER_PASSWORD);

  await profilePage.clickProfileTab();

  await expect(profilePage.editProfileButton).toBeVisible();
  await expect(profilePage.profileBannerImage).toBeVisible();
  const username = await profilePage.getUserNameText();
  expect(username?.trim().length).toBeGreaterThan(0);

  await profilePage.openNotifications();
  await profilePage.clearAllNotifications();

  await capture(profilePage.page, 'profile-page');
});

test.describe('Settings Page', () => {
  test.beforeEach(async ({ loginPage, settingsPage, env }) => {
    await loginPage.login(env.USER_EMAIL_001, env.USER_PASSWORD);
    await settingsPage.navigateToSettings();
  });

  test('should display Account Settings as active menu', async ({ settingsPage }) => {
    expect(await settingsPage.isAccountSettingsVisible()).toBeTruthy();
  });

  test('should display all main account settings options', async ({ settingsPage }) => {
    await expect(settingsPage.accountTypeOption).toBeVisible();
    await expect(settingsPage.twoFactorAuthOption).toBeVisible();
    await expect(settingsPage.changePasswordOption).toBeVisible();
    await expect(settingsPage.deleteAccountOption).toBeVisible();
  });

  test('should navigate to Privacy Settings on sidebar menu click', async ({ settingsPage, page }) => {
    await settingsPage.clickPrivacySettings();

  const [response] = await Promise.all([
    page.waitForResponse(resp =>
      resp.url().includes('/edit_profile') && resp.status() === 200
    ),
    settingsPage.clickPrivacySettings()
  ]);

  const json = await response.json();
  expect(json).toHaveProperty('data');


    // Assert heading
    const privacyHeading = settingsPage.page.locator('p.setting-head', { hasText: 'Privacy Settings' });
    await expect(privacyHeading).toBeVisible();

    // Assert options
    await expect(settingsPage.page.getByText('Messages and Calls')).toBeVisible();
    await expect(settingsPage.page.getByText('Blocked Users')).toBeVisible();
    await expect(settingsPage.page.getByText('Download Content')).toBeVisible();
    await expect(settingsPage.page.getByText('Comments')).toBeVisible();
  });

  test('should navigate to Corporate Account on sidebar menu click', async ({ settingsPage }) => {
    await settingsPage.clickCorporateAccount();
    await expect(settingsPage.page).toHaveURL(/settings.*corporate/i);
  });

  test('should navigate to General Settings on sidebar menu click', async ({ settingsPage }) => {
    await settingsPage.clickGeneralSettings();
    await expect(settingsPage.page).toHaveURL(/settings.*general/i);
  });

  test('should navigate to About ONG8 on sidebar menu click', async ({ settingsPage }) => {
    await settingsPage.clickAboutOneG8();
    await expect(settingsPage.page).toHaveURL(/settings.*about/i);
  });

  test('should log out on Log Out menu click', async ({ settingsPage, page }) => {
    await settingsPage.clickLogOut();

    const logoutModalText = page.locator('p.text-center.remove-acc');
    await expect(logoutModalText).toHaveText(/are you absolutely certain.*logging out/i);

    const confirmLogoutButton = page.locator('button.delete-btn', { hasText: 'Yes, Log Out' });

    const [response] = await Promise.all([
      page.waitForResponse(resp =>
        resp.url().includes('/log_out') && resp.status() === 200
      ),
      confirmLogoutButton.click(),
    ]);

    const json = await response.json();
    expect(json).toHaveProperty('Message', 'Logout successful');
    expect(json).toHaveProperty('Status', 1);

    await expect(page).toHaveURL(/login/i);
  });
});

test.describe('Search Sidebar Page', () => {
  test.beforeEach(async ({ loginPage, searchSidebarPage, env }) => {
    await loginPage.login(env.USER_EMAIL_001, env.USER_PASSWORD);
    await searchSidebarPage.navigateToSearch();
  });

  test('should display the heading as Search', async ({ searchSidebarPage }) => {
    await searchSidebarPage.assertHeadingSearch();
  });

  test('should display search input box', async ({ searchSidebarPage }) => {
    await searchSidebarPage.assertsearchInputBox();
  });

  test('should display three tabs for searching', async ({ searchSidebarPage }) => {
    await searchSidebarPage.assertThreeTabs();
  });

  test('should display no search message', async ({ searchSidebarPage }) => {
    await searchSidebarPage.assertNoSearchMsg();
  });
});

test.describe('Notification Sidebar', () => {
  test.beforeEach(async ({ loginPage, notificationSidebarPage, env }) => {
    await loginPage.login(env.USER_EMAIL_001, env.USER_PASSWORD);
    await notificationSidebarPage.navigateToNotification();
  });

  test('should display the heading as Notifications', async ({ notificationSidebarPage }) => {
    await notificationSidebarPage.assertHeadingNotification();
  });

  test('should display the Clear All button', async({ notificationSidebarPage }) => {
    await notificationSidebarPage.assertClearAllButton();
  });
});
