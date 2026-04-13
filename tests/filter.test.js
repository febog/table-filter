import { test, expect } from '@playwright/test';

test('my-table has 5 non-heading rows', async ({ page }) => {
  await page.goto('/test-stage');

  const rows = page.locator('#filter-table tbody tr');
  await expect(rows).toHaveCount(5);
});

test('Filter "no" rows', async ({ page }) => {
  await page.goto('/test-stage');

  const filterInput = page.locator('#table-search-input');
  filterInput.fill('no');

  const hiddenRows = page.locator('#filter-table tbody tr[style="display: none;"]');
  await expect(hiddenRows).toHaveCount(3);
});

test('Filter "yes" rows', async ({ page }) => {
  await page.goto('/test-stage');

  const filterInput = page.locator('#table-search-input');
  filterInput.fill('yes');

  const hiddenRows = page.locator('#filter-table tbody tr[style="display: none;"]');
  await expect(hiddenRows).toHaveCount(2);
});

test('Filter by text', async ({ page }) => {
  await page.goto('/test-stage');

  const filterInput = page.locator('#table-search-input');
  filterInput.fill('tempor');

  const hiddenRows = page.locator('#filter-table tbody tr[style="display: none;"]');
  await expect(hiddenRows).toHaveCount(3);
});

test('Filter by number', async ({ page }) => {
  await page.goto('/test-stage');

  const filterInput = page.locator('#table-search-input');
  filterInput.fill('08');

  const hiddenRows = page.locator('#filter-table tbody tr[style="display: none;"]');
  await expect(hiddenRows).toHaveCount(2);
});

test('Filter a single row', async ({ page }) => {
  await page.goto('/test-stage');

  const filterInput = page.locator('#table-search-input');
  filterInput.fill('Lorem');

  const hiddenRows = page.locator('#filter-table tbody tr[style="display: none;"]');
  await expect(hiddenRows).toHaveCount(4);
});

test('Initial filter', async ({ page }) => {
  await page.goto('/test-stage');

  const hiddenRows = page.locator('#filter-table tbody tr[style="display: none;"]');
  await expect(hiddenRows).toHaveCount(0);
});

test('Small input, with none found', async ({ page }) => {
  await page.goto('/test-stage');

  const filterInput = page.getByLabel('Search:');
  filterInput.fill('f');

  const hiddenRows = page.locator('#filter-table tbody tr[style="display: none;"]');
  await expect(hiddenRows).toHaveCount(5);
});
