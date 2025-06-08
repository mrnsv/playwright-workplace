import { Page, Locator, expect } from '@playwright/test';

export class NotificationSidebarPage {
    readonly page: Page;
    readonly notificationSidebarButton: Locator;
    readonly heading: Locator;
    readonly clearAll: Locator;

    constructor(page: Page) {
        this.page = page;
        this.notificationSidebarButton = page.locator("//a[contains(@href, '#') and contains(., 'Notification')]");
        this.heading = page.locator('.nitify-title .notification-name');
        this.clearAll = page.locator('.nitify-title .clear-text');
    }

    async navigateToNotification() {
        await this.notificationSidebarButton.click();
    }

    // Assert the heading "Notifications"
    async assertHeadingNotification() {
        await expect(this.heading).toBeVisible();
        await expect(this.heading).toHaveText('Notifications');
    }

    // Assert "Clear All" button is visible
    async assertClearAllButton() {
        await expect(this.clearAll).toBeVisible();
        await expect(this.clearAll).toHaveText('Clear All');
    } 
}