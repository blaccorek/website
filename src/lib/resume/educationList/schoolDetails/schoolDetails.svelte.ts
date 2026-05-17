export type School = {
    name: string;
    websiteUrl?: string;
    degree?: string;
    programType?: string;
    description?: string;
    startYear?: number;
    hasValidity?: boolean;
    endYear?: number;
};

const FALLBACK_GRANT = 'Completed studies';

export const selectGrant = (school: Pick<School, 'degree' | 'programType'>) =>
    school.degree || school.programType || FALLBACK_GRANT;

export const buildDate = (
    school: Pick<School, 'startYear' | 'endYear' | 'hasValidity'>,
    today: () => number = () => new Date().getFullYear()
): string => {
    const { startYear, endYear, hasValidity } = school;
    if (hasValidity && typeof startYear === 'number') {
        return `Valid from ${startYear} to ${endYear ?? 'now'}`;
    }
    if (typeof endYear === 'number') {
        return endYear.toString();
    }
    return today().toString();
};
