# Playwright-Learning

# Setup
1. Install nodeJS
2. run npm install

# Run the tests
npx playwright test

# Show report
npx playwright show-report


# Project structure
│
├── 📁 data/                         # Test data files
│   └── users.json                  # Sample user credentials for login tests
├── 📁 pages/                       # Page Object Model (POM) classes
│   ├── base.page.ts               # Base page with shared methods (e.g., goto)
│   └── login.page.ts              # Login page object with locators and actions
├── 📁 tests/                       # Main test specifications
│   └── testcase_login.spec.ts     # Example login test using POM
├── 📁 scripts/                     # Scripts for Summary test results
│   └── summary.js                      # Summary test results