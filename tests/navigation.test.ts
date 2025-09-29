import { expect, test } from '@playwright/test';

for (const link of [
    { name: 'About Me', url: '/' },
    { name: 'Work Experience', url: '/experience' },
    { name: 'Education & Certifications', url: '/education' }
]) {
    test(`Navbar has link ${link.name} redicting to ${link.url}`, async ({
        page
    }) => {
        await page.goto('/');
        const foundLink = page.getByRole('link', { name: link.name });
        await expect(foundLink).toBeVisible();
        await foundLink.click();
        await expect(page).toHaveURL(link.url);
    });
}
