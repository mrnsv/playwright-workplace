import { Page, Locator, expect } from '@playwright/test';

export class MessagesPage {
  readonly page: Page;
  readonly messagesNavLink: Locator;
  readonly messagesContainer: Locator;
  readonly activeNavLink: Locator;
  readonly sidebarMenu: Locator;
  readonly companyName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.messagesNavLink = page.locator("//a[contains(@href, '/message') and contains(., 'Messages')]");
    this.messagesContainer = page.locator('.layout_layoutContents__M6FuI');
    this.activeNavLink = page.locator('a.actives.sidedata');
    this.sidebarMenu = page.locator('.sidebar-menu');
    this.companyName = page.locator('.company-name');
  }

  async navigateToMessages() {
    await this.messagesNavLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async assertMessagesContainerVisible() {
    await expect(this.messagesContainer).toBeVisible();
  }

  async assertSidebarMenuVisible() {
    await expect(this.sidebarMenu).toBeVisible();
  }

  async assertActiveLinkIsMessages() {
    await expect(this.activeNavLink).toContainText('Messages');
  }

  async assertCompanyName(expected: string) {
    await expect(this.companyName).toHaveText(expected);
  }
}
