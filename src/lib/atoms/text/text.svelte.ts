export type TextSize = 'sm' | 'base' | 'lg' | 'xl' | '2xl';
export type TextTone = 'default' | 'muted' | 'accent';

const SIZE_CLASSES: Record<TextSize, string> = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-base sm:text-lg',
    xl: 'text-lg sm:text-xl',
    '2xl': 'text-xl sm:text-2xl'
};

const TONE_CLASSES: Record<TextTone, string> = {
    default: 'text-gray-700 dark:text-gray-300',
    muted: 'text-gray-500 dark:text-gray-400',
    accent: 'text-primary-700 dark:text-primary-400'
};

export const textClasses = (size: TextSize, tone: TextTone): string =>
    `${SIZE_CLASSES[size]} ${TONE_CLASSES[tone]}`;
