export type IconName =
    | 'briefcase'
    | 'graduationCap'
    | 'certificate'
    | 'externalLink';

/** Stroke paths on a 24×24 grid, drawn with `currentColor`. */
export const ICON_PATHS: Record<IconName, string[]> = {
    briefcase: [
        'M9 6.5V5.5A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5v1',
        'M4 6.5h16a1 1 0 0 1 1 1v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-11a1 1 0 0 1 1-1Z',
        'M3 11.5h18',
        'M10.5 11.5h3'
    ],
    graduationCap: [
        'M12 4 2.5 8.5 12 13l9.5-4.5L12 4Z',
        'M6.5 10.75v4.4c0 1.6 2.46 2.85 5.5 2.85s5.5-1.25 5.5-2.85v-4.4',
        'M21.5 8.5V14'
    ],
    certificate: [
        'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
        'm8.5 12 2.4 2.4 4.6-4.8'
    ],
    externalLink: ['M8 16 16 8', 'M9.5 8H16v6.5']
};
