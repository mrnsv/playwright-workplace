import { Page, Locator, expect } from '@playwright/test';
import { ENV } from '../env';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly loggedInIndicator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.loggedInIndicator = page.locator("//a[text()='Public Square']");
  }

  async goto() {
    await this.page.goto(ENV.BASE_URL);
  }

  async login(email: string, password: string) {
    // Go to login page
    await this.goto();

    // If already logged in, skip
    const isLoggedIn = await this.loggedInIndicator.isVisible().catch(() => false);
    if (isLoggedIn) return;

    // Perform login
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
    await expect(this.loggedInIndicator).toBeVisible();
  }

  async assertLoggedIn() {
    await this.page.waitForLoadState('networkidle');
    await expect(this.loggedInIndicator).toBeVisible();
  }
}
