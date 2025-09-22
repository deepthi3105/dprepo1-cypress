# Cypress E2E – SauceDemo Highest Price

This repository contains a Cypress end-to-end test that:

1. Opens https://www.saucedemo.com  
2. Logs in with `standard_user / secret_sauce`  
3. Scans all product cards and parses prices (without using the “Sort By” control)  
4. Adds the highest-priced item to the cart  
5. Verifies the item name and price in the cart

---

## Tech stack

- Cypress 13
- Node.js (LTS)
- CommonJS config (`cypress.config.cjs`)

---

## Prerequisites

- Install **Node.js 18+**: https://nodejs.org  
- Install **Git**: https://git-scm.com  
- A terminal (VS Code Terminal, PowerShell, or CMD on Windows)

Check versions:
```bash
node -v
npm -v
git --version
