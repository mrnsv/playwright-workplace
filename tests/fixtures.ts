import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PublicSquarePage } from '../pages/PublicSquarePage';
import { ReelsPage } from '../pages/ReelsPage';
import { MessagesPage } from '../pages/MessagesPage';
import { ProfilePage } from '../pages/ProfilePage';
import { SettingsPage } from '../pages/SettingsPage';
import { SearchSidebarPage } from '../pages/SearchSidebarPage';
import { ENV } from '../env';
import { captureScreenshot } from '../utils/screenshotHelper';

type CustomFixtures = {
  loginPage: LoginPage;
  publicSquarePage: PublicSquarePage;
  reelsPage: ReelsPage;
  messagesPage: MessagesPage;
  profilePage: ProfilePage;
  settingsPage: SettingsPage;
  searchSidebarPage: SearchSidebarPage;
  env: typeof ENV;
  capture: (page: Page, name: string) => Promise<void>;
};

export const test = base.extend<CustomFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  publicSquarePage: async ({ page }, use) => {
    await use(new PublicSquarePage(page));
  },
  reelsPage: async ({ page }, use) => {
    await use(new ReelsPage(page));
  },
  messagesPage: async ({ page }, use) => {
    await use(new MessagesPage(page));
  },
  profilePage: async ({ page }, use) => {
    await use(new ProfilePage(page));
  },
  settingsPage: async ({ page }, use) => {
    await use(new SettingsPage(page));
  },
  searchSidebarPage: async ({ page }, use) => {
    await use(new SearchSidebarPage(page));
  },
  env: async ({}, use) => {
    await use(ENV);
  },
  capture: async ({}, use, testInfo) => {
    await use((page, name) => captureScreenshot(page, name, testInfo));
  },
});

export { expect };
