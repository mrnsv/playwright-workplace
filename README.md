# Playwright Automation Framework with TypeScript

![Tests](https://img.shields.io/badge/tests-passing-brightgreen)

This repository demonstrates a scalable, maintainable, and robust **end-to-end test automation framework** built with **Playwright** and **TypeScript**. The framework is architected using the **Page Object Model (POM)** pattern to ensure clean separation of concerns, reusability, and ease of maintenance.

---

## 🚀 Project Overview

The project targets reliable UI automation for modern web applications, focusing on:

- **Strongly typed tests** with TypeScript for code quality and developer productivity  
- **Page Object Model design** for encapsulating UI interaction logic  
- Integration with **environment configuration** for flexible multi-environment testing  
- Utilities for **screenshot capturing**, **test reporting**, and **debugging support**  
- Ready for **CI/CD integration** with Playwright’s powerful test runner  

---

## 📂 Project Structure

```bash
playwright-workplace/
├── tests/                   # E2E test cases and fixtures
│   ├── fixtures.ts          # Shared test data and hooks
│   └── oneg8.spec.ts        # Example test scenario
│
├── pages/                   # Page Object Models encapsulating UI components
│   ├── LoginPage.ts         
│   └── PublicSquarePage.ts  
│
├── utils/                   # Helper utilities (e.g., screenshots)
│   └── screenshotHelper.ts  
│
├── env.ts                   # Environment variable loader (dotenv integration)
├── playwright.config.ts     # Playwright test runner configuration
├── package.json             # NPM dependencies and scripts
├── tsconfig.json            # TypeScript compiler settings
└── README.md                # Project documentation
```
---

## 🔧 Setup and Execution

### 1. **Clone the Repository**

```bash
git clone https://github.com/mrnsv/playwright-workplace.git
cd playwright-workplace
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Set Up Environment Variables**

Create a `.env` file in the root with the following content:

```env
BASE_URL=<oneg8_url>
USER_EMAIL_001=testuser@example.com
USER_PASSWORD=your_secure_password
```

Ensure your `env.ts` reads this file using `dotenv`:

```ts
// env.ts
import * as dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  BASE_URL: process.env.BASE_URL,
  USER_EMAIL_001: process.env.USER_EMAIL_001,
  USER_PASSWORD: process.env.USER_PASSWORD
};
```

### 4. **Run the full test suite**

```bash
npx playwright test
```

### 5. **Run a Specific Test File**

```bash
npx playwright test tests/oneg8.spec.ts
```

---

## ✔️ Core Features

* 🔹 **Playwright + TypeScript**: Leverages modern ES syntax with static typing for improved reliability  
* 🧱 **Page Object Model**: Enhances test readability and reduces duplication  
* 📸 **Screenshot utility**: Captures screenshots on-demand for debugging and reporting  
* 📦 **Environment-based config**: Supports seamless switching between test environments  
* ⚙️ **Comprehensive Reporting**: Built-in Playwright HTML reports with CLI integration  

---

## 📷 Screenshots

All screenshots are saved under:

```bash
./screenshots/
```

You can customize the naming and path in `screenshotHelper.ts`:

```ts
// screenshotHelper.ts
import { Page } from '@playwright/test';
import fs from 'fs';

export async function captureScreenshot(page: Page, name: string) {
  const dir = './screenshots';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  await page.screenshot({ path: `${dir}/${name}.png`, fullPage: true });
}
```

---

## 🧪 Test Reporting

To generate and view an HTML report:

```bash
npx playwright show-report
```

You can also configure custom reporters in `playwright.config.ts`.

---

## 📦 Scripts

```json
"scripts": {
  "test": "npx playwright test",
  "test:headed": "npx playwright test --headed",
  "test:debug": "npx playwright test --debug",
  "report": "npx playwright show-report"
}
```

---

## 🧹 Best Practices Followed

* ✅ Strict adherence to Separation of Concerns between test logic and UI interactions
* ✅ Usage of descriptive, maintainable selectors to reduce flakiness
* ✅ Strongly typed page objects and utilities for consistency and error prevention
* ✅ Modular and reusable helper functions for clean test code
* ✅ Comprehensive test assertions and meaningful failure diagnostics

---

## 🔐 Security Tip

Avoid committing `.env` files or sensitive credentials. Add `.env` to `.gitignore`.

---

## 🤝 Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📬 Contact

For queries or feedback, please contact [mrnsv01@gmail.com](mailto:mrnsv01@gmail.com).

---
