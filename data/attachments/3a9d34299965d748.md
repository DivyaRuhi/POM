# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> has title
- Location: tests\example.spec.js:4:5

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https:// .dev/
Call log:
  - navigating to "https:// .dev/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: "%20.dev"
      - text: ’s DNS address could not be found. Diagnosing the problem.
    - generic [ref=e10]:
      - paragraph
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "Try running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e14]: DNS_PROBE_STARTED
  - button "Reload" [ref=e17] [cursor=pointer]
```

# Test source

```ts
  1  | // @ts-check
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | test('has title', async ({ page }) => {
> 5  |   await page.goto('https:// .dev/');
     |              ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https:// .dev/
  6  | 
  7  |   // Expect a title "to contain" a substring.
  8  |   await expect(page).toHaveTitle(/Playwright/);
  9  | });
  10 | 
  11 | test('get started link', async ({ page }) => {
  12 |   await page.goto('https://playwright.dev/');
  13 | 
  14 |   // Click the get started link.
  15 |   await page.getByRole('link', { name: 'Get started' }).click();
  16 | 
  17 |   // Expects page to have a heading with the name of Installation.
  18 |   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  19 | });
  20 | 
```