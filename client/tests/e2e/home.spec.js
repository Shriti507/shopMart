import { test, expect } from '@playwright/test';

test('has basic dashboard rendering constraints', async ({ page }) => {
  
  await page.goto('/user-dashboard');

  // Verify Navbar exists
  await expect(page.locator('header')).toBeVisible();

  // Verify generic brand wording or hero catchphrase exists
  await expect(page.getByText(/We bring the/i)).toBeVisible();
  
  // Wait to see if product fetching succeeds and populates rows
  await expect(page.getByRole('button', { name: 'Shop Now' })).toBeVisible();
});
