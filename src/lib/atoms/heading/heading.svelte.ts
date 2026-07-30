export type HeadingLevel = 1 | 2 | 3 | 4;

const TONE_CLASSES = 'text-gray-900 dark:text-white';

const LEVEL_CLASSES: Record<HeadingLevel, string> = {
    1: 'text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl',
    2: 'text-2xl font-bold tracking-tight sm:text-3xl',
    3: 'text-lg font-semibold sm:text-xl',
    4: 'text-base font-semibold'
};

export const headingClasses = (level: HeadingLevel): string =>
    `${TONE_CLASSES} ${LEVEL_CLASSES[level]}`;
