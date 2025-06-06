import { Page, Locator, expect } from '@playwright/test';

export class Reelspage {
    readonly page: Page;
    readonly reelsButton: Locator;
    readonly reelContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.reelsButton = page.locator("//a[text()='Reels']");
        this.reelContainer = page.locator('#reelContainer');
    }

    async navigateToReels() {
        await this.reelsButton.waitFor({ state: 'visible' });
        await this.reelsButton.click()
        await this.page.waitForLoadState('networkidle');
    }

    async assertReelsFeedVisible() {
        await expect(this.reelContainer).toBeVisible();
    }
}