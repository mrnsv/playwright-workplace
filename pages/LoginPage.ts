import { Page, Locator, expect } from '@playwright/test';
import { ENV } from '../env';

export class LoginPage {
  private page: Page;
  private emailInput: Locator;
  private passwordInput: Locator;
  private signInButton: Locator;
  private publicSquareLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.publicSquareLink = page.locator("//a[text() = 'Public Square']");
  }

  async goto() {
    await this.page.goto(ENV.BASE_URL);
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async assertLoggedIn() {
    await expect(this.publicSquareLink).toBeVisible();
  }
}
