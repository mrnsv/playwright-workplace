
---

```markdown
# 🔎 Playwright Test Automation with TypeScript

A modern end-to-end (E2E) automation framework built using **[Playwright](https://playwright.dev/)** and **TypeScript**, following **Page Object Model (POM)** architecture. This project is designed to be scalable, maintainable, and easy to integrate with CI/CD pipelines.

---

## 📁 Project Structure

```

project-root/
│
├── tests/                   # Test specifications
│   └── login.spec.ts
│
├── pages/                   # Page Object Models
│   └── LoginPage.ts
│
├── utils/                   # Helper functions and utilities
│   └── screenshotHelper.ts
│
├── env.ts                   # Environment variables loader
├── playwright.config.ts     # Global Playwright test config
├── package.json             # Project metadata and scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation

````

---

## 🚀 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-org/your-repo.git
cd your-repo
````

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Set Up Environment Variables**

Create a `.env` file in the root with the following content:

```env
BASE_URL=https://your-app-url.com
USER_EMAIL_001=testuser@example.com
USER_PASSWORD=your_secure_password
```

Ensure your `env.ts` reads this file using `dotenv`.

### 4. **Run Tests**

```bash
npx playwright test
```

### 5. **Run a Specific Test File**

```bash
npx playwright test tests/login.spec.ts
```

---

## ✅ Features

* 🔹 **Playwright + TypeScript** for strong typing and modern syntax
* 🧱 **Page Object Model** for cleaner, reusable test logic
* 📸 **Screenshot utility** for debugging and documentation
* 📦 **Environment-based config** for flexibility across environments
* ⚙️ **Playwright Test Runner** with powerful CLI and reporter support

---

## 🔍 Example Test Scenario

```ts
test('login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(ENV.USER_EMAIL_001, ENV.USER_PASSWORD);
  await loginPage.assertLoggedIn();
  await captureScreenshot(page, 'homepage');
});
```

---

## 📷 Screenshots

All screenshots are saved under:

```
./screenshots/
```

You can customize the naming and path in `screenshotHelper.ts`.

---

## 🧪 Test Reporting

To generate an HTML report:

```bash
npx playwright show-report
```

Or configure custom reporters in `playwright.config.ts`.

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

* ✅ Clear separation of concerns (tests vs. actions)
* ✅ Descriptive and maintainable selectors
* ✅ Robust test assertions
* ✅ Modular utilities
* ✅ Typed page objects

---

## 🔐 Security Tip

Avoid committing `.env` files or sensitive credentials. Add `.env` to `.gitignore`.

---

## 🤝 Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📬 Contact

For queries or feedback, please contact [mrnsv01@gmail.com](mailto:mrnsv01@gmail.com).

```

---

Let me know if you'd like this tailored further for CI integration (like GitHub Actions), Docker setup, or enterprise-style documentation.
```