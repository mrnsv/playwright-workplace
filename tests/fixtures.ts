import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ENV } from '../env';
import { captureScreenshot } from '../utils/screenshotHelper';

type CustomFixtures = {
  loginPage: LoginPage;
  env: typeof ENV;
  capture: (page: Page, name: string) => Promise<void>;
};

export const test = base.extend<CustomFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  env: async ({}, use) => {
    await use(ENV);
  },
  capture: async ({}, use) => {
    await use(captureScreenshot);
  },
});

export { expect };
