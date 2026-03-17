import { test } from '@playwright/test';

test("proKabaddi", async ({ page }) => {
  await page.goto("https://www.prokabaddi.com/schedule-fixtures-results?tab=recent");
  const finalist = await page.locator('(//div[@class="fixtures-body"])[1]//p[@class="match-count" or @class="team-name" or @class="score" or @class="match-place"]').allTextContents();
  console.log(finalist);
});

