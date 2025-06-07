import { Page, Locator, expect } from '@playwright/test';

export class PublicSquarePage {
  readonly page: Page;
  readonly publicSquareButton: Locator;
  readonly publicFeedContainer: Locator;
  readonly scrollToTopButton: Locator;
  readonly sidebarMenu: Locator;
  readonly createButton: Locator;
  readonly activeNavLink: Locator;
  readonly companyName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.publicSquareButton = page.locator("//a[text()='Public Square']");
    this.publicFeedContainer = page.locator('.homelazyComponent_screenContainer__AMht8');
    this.scrollToTopButton = page.locator('span.scroll-to-top[data-tooltip="Scroll to Top"]');
    // Sidebar menu icon (burger)
    this.sidebarMenu = page.locator('.sidebar-menu');

    // Create button in sidebar
    this.createButton = page.locator('.primary-btn');

    // Active navigation link in sidebar
    this.activeNavLink = page.locator('.actives');

    // Company name text element
    this.companyName = page.locator('.company-name');
  }

  async navigateToPublicSquare() {
    await this.publicSquareButton.waitFor({ state: 'visible' });
    // await this.publicSquareButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async assertPublicFeedVisible() {
    await expect(this.publicFeedContainer).toBeVisible();
  }

  async scrollDown(pixels = 1000) {
    await this.page.mouse.wheel(0, pixels);
  }

  async assertScrollToTopVisible() {
    await expect(this.scrollToTopButton).toBeVisible();
  }
  async assertSidebarMenuVisible() {
    await expect(this.sidebarMenu).toBeVisible();
  }

  async clickCreateButton() {
    await this.createButton.click();
  }

  async assertActiveLinkIsVisible() {
    await expect(this.activeNavLink).toBeVisible();
  }

  async assertCompanyName(expectedName: string) {
    await expect(this.companyName).toHaveText(expectedName);
  }
}
