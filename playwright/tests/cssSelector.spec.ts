import { test } from "@playwright/test";

test.skip("practiceTestLogin", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.locator("input#username").fill("student");
  await page.locator("input#password").fill("Password123");
  await page.locator("button#submit").click();
  await page.locator(".wp-block-button__link.has-text-color").click()
});
test.skip("practiceTestLogin2", async ({ page }) => {
  await page.goto("https://techbeamers.com/practice-test-login/");
  await page.locator("input#username").fill("testuser");
  await page.locator("input#password").fill("password123");
  await page.locator("button[type=submit]").click();
});
//! using xpath both with absolute and relative
test("practiceTestLogin3", async ({ page }) => {
  await page.goto("https://techbeamers.com/practice-test-login/");
  await page.locator('xpath=/html/body/div/main/div/div/article/div/div/div/div/div/div/div/div/form/div/input[@id="username"]').fill("testuser");
  await page.locator('//input[@id="password"]').fill("password123"); //?relative cuz start with '//'
  await page.locator("button[type=submit]").click();
});