export function toCamelCase(str: string): string {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .filter((word) => word) // Remove empty strings caused by multiple spaces
        .join(' ');
}
