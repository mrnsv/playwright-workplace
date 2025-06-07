import { Locator, Page } from '@playwright/test';

export class SettingsPage {
  readonly page: Page;

  // Sidebar menu items
  readonly settingsNavLink: Locator;
  readonly accountSettingsMenu: Locator;
  readonly privacySettingsMenu: Locator;
  readonly corporateAccountMenu: Locator;
  readonly generalSettingsMenu: Locator;
  readonly aboutOneG8Menu: Locator;
  readonly logOutMenu: Locator;

  // Account Settings panel items
  readonly accountTypeOption: Locator;
  readonly twoFactorAuthOption: Locator;
  readonly changePasswordOption: Locator;
  readonly deleteAccountOption: Locator;

  constructor(page: Page) {
    this.page = page;

    this.settingsNavLink = page.locator("//a[contains(@href, '/settings') and contains(., 'Settings')]");

    // Sidebar menu selectors based on classes and texts
    this.accountSettingsMenu = page.locator('.setting-sidebar p.active-menu', { hasText: 'Account Settings' });
    this.privacySettingsMenu = page.locator('.setting-sidebar p.setting-menu', { hasText: 'Privacy Settings' });
    this.corporateAccountMenu = page.locator('.setting-sidebar p.setting-menu', { hasText: 'Corporate Account' });
    this.generalSettingsMenu = page.locator('.setting-sidebar p.setting-menu', { hasText: 'General Settings' });
    this.aboutOneG8Menu = page.locator('.setting-sidebar p.setting-menu', { hasText: 'About ONG8' });
    this.logOutMenu = page.locator('.setting-sidebar p.setting-menu', { hasText: 'Log Out' });

    // Account Settings options inside main content
    this.accountTypeOption = page.locator('.set-part-2 .account-plate', { hasText: 'Account Type' });
    this.twoFactorAuthOption = page.locator('.set-part-2 .account-plate', { hasText: 'Two-Factor Authentication' });
    this.changePasswordOption = page.locator('.set-part-2 .account-plate', { hasText: 'Change Password' });
    this.deleteAccountOption = page.locator('.set-part-2 .account-plate', { hasText: 'Delete Account' });
  }

  async navigateToSettings() {
    await this.settingsNavLink.click();
  }

  async clickPrivacySettings() {
    await this.privacySettingsMenu.click();
  }

  async clickCorporateAccount() {
    await this.corporateAccountMenu.click();
  }

  async clickGeneralSettings() {
    await this.generalSettingsMenu.click();
  }

  async clickAboutOneG8() {
    await this.aboutOneG8Menu.click();
  }

  async clickLogOut() {
    await this.logOutMenu.click();
  }

  async isAccountSettingsVisible() {
    return this.accountSettingsMenu.isVisible();
  }

  async isAccountTypeOptionVisible() {
    return this.accountTypeOption.isVisible();
  }

  async isTwoFactorAuthOptionVisible() {
    return this.twoFactorAuthOption.isVisible();
  }

  async isChangePasswordOptionVisible() {
    return this.changePasswordOption.isVisible();
  }

  async isDeleteAccountOptionVisible() {
    return this.deleteAccountOption.isVisible();
  }
}
