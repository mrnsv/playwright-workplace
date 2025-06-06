import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PublicSquarePage } from '../pages/PublicSquarePage';
import { Reelspage } from '../pages/ReelsPage';
import { ENV } from '../env';
import { captureScreenshot } from '../utils/screenshotHelper';

type CustomFixtures = {
  loginPage: LoginPage;
  publicSquarePage: PublicSquarePage;
  reelsPage: Reelspage;
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
    await use(new Reelspage(page));
  },
  env: async ({}, use) => {
    await use(ENV);
  },
  capture: async ({}, use) => {
    await use(captureScreenshot);
  },
});

export { expect };
