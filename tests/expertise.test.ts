import { expect, test } from '@playwright/test';

const DOMAINS = [
    'Platform & Infrastructure Engineering',
    'Delivery & Developer Experience',
    'Full-Stack Product Engineering',
    'Reliability, Observability & Cost'
];

for (const domain of DOMAINS) {
    test(`the ${domain} card lists its highlights`, async ({ page }) => {
        await page.goto('/');
        const card = page
            .getByRole('article')
            .filter({ has: page.getByRole('heading', { name: domain }) });
        await expect(card).toBeVisible();
        await expect(card.getByRole('listitem')).toHaveCount(4);
    });
}

/* The illustrations carry nothing the heading does not, so they stay
   decorative: rendered, but with no alt text and nothing to click. */
test('the expertise illustrations are decorative', async ({ page }) => {
    await page.goto('/');
    const cards = page.getByRole('article');
    await expect(cards.locator('img')).toHaveCount(DOMAINS.length);
    await expect(cards.getByRole('img')).toHaveCount(0);
    await expect(cards.getByRole('button')).toHaveCount(0);
});
