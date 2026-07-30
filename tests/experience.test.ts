import { expect, test } from '@playwright/test';

test('experience page is headed by its section title', async ({ page }) => {
    await page.goto('/experience');
    await expect(
        page.getByRole('heading', { level: 2, name: 'Work Experience' })
    ).toBeVisible();
});

test('each experience entry gets its own heading', async ({ page }) => {
    await page.goto('/experience');
    const entries = page.getByRole('heading', { level: 3 });
    await expect(entries.first()).toBeVisible();
    expect(await entries.count()).toBeGreaterThan(1);
});

test('technologies are labelled links to their homepage', async ({ page }) => {
    await page.goto('/experience');
    const docker = page.getByRole('link', { name: 'Docker' }).first();
    await expect(docker).toBeVisible();
    await expect(docker).toHaveAttribute('href', 'https://www.docker.com/');
});
