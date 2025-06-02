import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { chromium, firefox, webkit } from '@playwright/test'
import { ENV } from '../env';

test('login', async()=> {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    
    // Browser Context 001
    const browserContext_001:BrowserContext = await browser.newContext();
    const page_001:Page = await browserContext_001.newPage();

    // Browser Context 002
    const browserContext_002:BrowserContext = await browser.newContext();
    const page_002:Page = await browserContext_002.newPage();
    
    // Browser 001
    await page_001.goto(ENV.BASE_URL);
    const emailId_001:Locator = await page_001.locator('#email');
    const password_001:Locator = await page_001.locator('#password');
    const loginButton_001:Locator = await page_001.getByRole('button', {name: 'Sign in'});  
    console.log(ENV.USER_EMAIL_001, ENV.USER_PASSWORD)
    await emailId_001.fill(ENV.USER_EMAIL_001);
    await password_001.fill(ENV.USER_PASSWORD);
    await loginButton_001.click();
    await expect(page_001.locator("//a[text() = 'Public Square']")).toBeVisible();
    await page_001.screenshot({path: './screenshots/homepage_001.png', fullPage: true})

    // Browser 002
    await page_002.goto(ENV.BASE_URL);
    const emailId_002:Locator = await page_002.locator('#email');
    const password_002:Locator = await page_002.locator('#password');
    const loginButton_002:Locator = await page_002.getByRole('button', {name: 'Sign in'});  
    await emailId_002.fill(ENV.USER_EMAIL_002);
    await password_002.fill(ENV.USER_PASSWORD);
    await loginButton_002.click();
    await expect(page_002.locator("//a[text() = 'Public Square']")).toBeVisible();
    await page_002.screenshot({path: './screenshots/homepage_002.png', fullPage: true})

    await browserContext_001.close();
    await browserContext_002.close();
    await browser.close();
});

