import { expect, test } from '@playwright/test';

test('index page has the name as top header', async ({ page }) => {
    await page.goto('/');
    await expect(
        page.getByRole('heading', {
            level: 1,
            name: 'Tsiorintsoa ANDRIAMIHAMINA'
        })
    ).toBeVisible();
});

test('index page has the job title', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/^DevOps consultant$/)).toBeVisible();
});

test('index page shows the brand logo', async ({ page }) => {
    await page.goto('/');
    await expect(
        page.getByRole('img', { name: 'Blaccorek logo' })
    ).toBeVisible();
});
