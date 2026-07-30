export type NavItem = {
    href: string;
    title: string;
    current: boolean;
};

const BASE_CLASSES =
    'block rounded-full px-4 py-2 text-center text-sm font-medium transition-colors sm:text-base';

/* primary-700 on white (and primary-500 on near-black) keeps the label above
   the AA contrast floor — see ADR-0007. */
const CURRENT_CLASSES =
    'bg-primary-700 text-white shadow-sm dark:bg-primary-500 dark:text-gray-950';

const IDLE_CLASSES =
    'text-gray-600 hover:bg-primary-50 hover:text-primary-700 dark:text-gray-300 dark:hover:bg-primary-900/40 dark:hover:text-primary-300';

export const navLinkClasses = (current: boolean): string =>
    `${BASE_CLASSES} ${current ? CURRENT_CLASSES : IDLE_CLASSES}`;
