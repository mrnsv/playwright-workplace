import { Page, Locator, expect } from '@playwright/test';

export class PublicSquarePage {
  readonly page: Page;
  readonly publicSquareButton: Locator;
  readonly publicFeedContainer: Locator;
  readonly scrollToTopButton: Locator;
  readonly createButton: Locator;
  readonly activeNavLink: Locator;
  readonly companyName: Locator;
  readonly sidebarLinks: Locator;


  constructor(page: Page) {
    this.page = page;
    this.publicSquareButton = page.locator("//a[text()='Public Square']");
    this.publicFeedContainer = page.locator('.homelazyComponent_screenContainer__AMht8');
    this.scrollToTopButton = page.locator('span.scroll-to-top[data-tooltip="Scroll to Top"]');
    this.sidebarLinks = page.locator('.position-relative a.sidedata');

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
  }

  async assertPublicFeedVisible() {
    await expect(this.publicFeedContainer).toBeVisible();
  }

  async scrollDown(pixels = 1000) {
    await this.page.waitForLoadState('networkidle');
    await this.page.mouse.wheel(0, pixels);
  }

  async assertScrollToTopVisible() {
    await expect(this.scrollToTopButton).toBeVisible();
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

  async assertSidebarItems(expectedItems: string[]) {
    const actualItems = await this.sidebarLinks.allTextContents();
    for (const item of expectedItems) {
      expect(actualItems).toContain(item);
    }
  }
  async assertDefaultSidebarItemsPresent() {
    await this.assertSidebarItems([
      'Create',
      'Public Square',
      'Reels',
      'Messages',
      'Search',
      'Notification',
      'Wallet',
      'DataG8',
      'KYC',
      'Profile',
      'Settings'
    ]);
  }
}
