export type BulletMarker = 'disc' | 'check';

/* The check marker draws its own icon per item, so the native list marker is
   turned off and the indent comes from the flex row instead. */
const MARKER_CLASSES: Record<BulletMarker, string> = {
    disc: 'marker:text-primary-500 list-outside list-disc ps-5',
    check: 'list-none'
};

export const listClasses = (marker: BulletMarker): string =>
    `space-y-2 ${MARKER_CLASSES[marker]}`;
