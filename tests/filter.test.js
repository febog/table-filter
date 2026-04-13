import { test, expect } from '@playwright/test';

test('my-table has 5 non-heading rows', async ({ page }) => {
  await page.goto('/test-stage');

  const rows = page.locator('#filter-table tbody tr');
  await expect(rows).toHaveCount(5);
});
