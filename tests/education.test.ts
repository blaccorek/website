import { expect, test } from '@playwright/test';

test('education page is headed by its section title', async ({ page }) => {
    await page.goto('/education');
    await expect(
        page.getByRole('heading', {
            level: 2,
            name: 'Education & Certifications'
        })
    ).toBeVisible();
});

test('each school entry gets its own heading', async ({ page }) => {
    await page.goto('/education');
    const entries = page.getByRole('heading', { level: 3 });
    await expect(entries.first()).toBeVisible();
    expect(await entries.count()).toBeGreaterThan(1);
});
