import { Page, Locator } from "@playwright/test";

export class TextBoxPage {
  readonly page: Page;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly permanentAddressInput: Locator;
  readonly submitButton: Locator;
  readonly outputContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fullNameInput = page.locator("#userName");
    this.emailInput = page.locator("#userEmail");
    this.currentAddressInput = page.locator("#currentAddress");
    this.permanentAddressInput = page.locator("#permanentAddress");
    this.submitButton = page.locator("#submit");
    this.outputContainer = page.locator("#output");
  }

  async navigateToTextBox() {
    await this.page.goto("https://demoqa.com/text-box");
    await this.page.waitForLoadState("networkidle");
  }

  async fillFullName(name: string) {
    await this.fullNameInput.fill(name);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillCurrentAddress(address: string) {
    await this.currentAddressInput.fill(address);
  }

  async fillPermanentAddress(address: string) {
    await this.permanentAddressInput.fill(address);
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async isOutputVisible(): Promise<boolean> {
    try {
      await this.outputContainer.waitFor({ state: "visible", timeout: 2000 });
      return true;
    } catch {
      return false;
    }
  }

  async getOutputText(): Promise<string> {
    return (await this.outputContainer.textContent()) || "";
  }

  async getFullNameValue(): Promise<string> {
    return await this.fullNameInput.inputValue();
  }

  async getEmailValue(): Promise<string> {
    return await this.emailInput.inputValue();
  }

  async getCurrentAddressValue(): Promise<string> {
    return await this.currentAddressInput.inputValue();
  }

  async getPermanentAddressValue(): Promise<string> {
    return await this.permanentAddressInput.inputValue();
  }
}
