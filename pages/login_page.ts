import { Locator, Page } from '@playwright/test';
import BasePage from './base.page.ts';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly loginMsg: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator("//input[@id='userfield']");
    this.passwordInput = page.locator("//input[@id='passwordfield']");
    this.submitButton = page.locator("//button[@id='sign_in_button']");
    this.loginMsg = page.locator("//div[@class='a-form-explain']//span");
  }

  async loginInput(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}