export type LinkVariant = 'accent' | 'quiet' | 'plain';

const UNDERLINE_CLASSES = 'underline-offset-4 hover:underline';

const VARIANT_CLASSES: Record<LinkVariant, string> = {
    accent: `text-primary-700 dark:text-primary-400 font-medium ${UNDERLINE_CLASSES}`,
    quiet: `text-gray-500 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 ${UNDERLINE_CLASSES}`,
    /* For links the caller paints itself — nav pills, technology chips. */
    plain: ''
};

const BASE_CLASSES = 'rounded-xs transition-colors';

export const linkClasses = (variant: LinkVariant): string =>
    `${BASE_CLASSES} ${VARIANT_CLASSES[variant]}`.trim();

export const isExternal = (href: string): boolean => /^[a-z]+:/i.test(href);

/** External links open in a new tab, and must never leak the opener. */
export const externalAttributes = (href: string) =>
    isExternal(href)
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : { target: undefined, rel: undefined };
