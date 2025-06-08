import { Page, Locator, expect } from '@playwright/test';

export class SearchSidebarPage {
    readonly page: Page;
    readonly searchSidebarButton: Locator;
    readonly heading: Locator;
    readonly searchInput: Locator;
    readonly peopleTab: Locator;
    readonly businessTab: Locator;
    readonly chatroomsTab: Locator;
    readonly noSearchesMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchSidebarButton = page.locator("//a[contains(@href, '#') and contains(., 'Search')]");
        this.heading = page.locator('.srch-head .srch-name');
        this.searchInput = page.locator('input.srch-inp');
        this.peopleTab = page.locator('.srch-group p').nth(0);
        this.businessTab = page.locator('.srch-group p').nth(1);
        this.chatroomsTab = page.locator('.srch-group p').nth(2);
        this.noSearchesMsg = page.locator('.d-flex.justify-content-center.mt-3');
    }

    async navigateToSearch() {
        await this.searchSidebarButton.click();
    }

    // Assert the heading "Search"
    async assertHeadingSearch() {
        await expect(this.heading).toHaveText('Search');
    }

    // Assert the search input box
    async assertsearchInputBox() {
        await expect(this.searchInput).toBeVisible();
        await expect(this.searchInput).toHaveAttribute('placeholder', 'Search');
        await expect(this.searchInput).toHaveAttribute('type', 'search');
    }

    // Assert the three section tabs
    async assertThreeTabs() {
        await expect(this.peopleTab).toHaveText('People');
        await expect(this.businessTab).toHaveText('Business');
        await expect(this.chatroomsTab).toHaveText('Chatrooms');      
    }

    // Assert the "No recent searches." message
    async assertNoSearchMsg() {
        await expect(this.noSearchesMsg).toHaveText('No recent searches.');
    }
}