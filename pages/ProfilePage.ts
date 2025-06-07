import { Page, Locator } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;
  readonly profileTab: Locator;
  readonly editProfileButton: Locator;
  readonly profileBannerImage: Locator;
  readonly userName: Locator;
  readonly notificationPanel: Locator;
  readonly clearAllButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileTab = page.locator('a[href="/profile"]');
    this.editProfileButton = page.locator('button.edit-profile-btn');
    this.profileBannerImage = page.locator('img.pro-banner');
    this.userName = page.locator('.sub-pro-head-profile .sub-pro-head1 span');
    this.notificationPanel = page.locator('#notifyside');
    this.clearAllButton = this.notificationPanel.locator('.clear-text');
  }

  async goto() {
    await this.page.goto('/profile');
  }

  async clickProfileTab() {
    await this.profileTab.click();
  }

  async clickEditProfile() {
    await this.editProfileButton.click();
  }

  async getUserNameText(): Promise<string | null> {
    return this.userName.textContent();
  }

  async openNotifications() {
    await this.page.locator('#notifiySidebar').click();
  }

  async clearAllNotifications() {
    await this.clearAllButton.click();
  }
}
