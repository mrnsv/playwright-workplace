import { Page, Locator, expect } from '@playwright/test';

export class PublicSquarePage {
  readonly page: Page;
  readonly publicSquareButton: Locator;
  readonly publicFeedContainer: Locator;
  readonly scrollToTopButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.publicSquareButton = page.locator("//a[text()='Public Square']");
    this.publicFeedContainer = page.locator('.homelazyComponent_screenContainer__AMht8');
    this.scrollToTopButton = page.locator('span.scroll-to-top[data-tooltip="Scroll to Top"]');
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
}
