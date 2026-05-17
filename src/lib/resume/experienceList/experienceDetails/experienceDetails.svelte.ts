import type { Technology } from '$lib/molecules/technologyIcon/technologyIcon.svelte';

export type Position = {
    company: string | { name: string; url: string; description: string };
    title: string;
    client?: string;
};

export type Experience = {
    position: Position;
    startDate: string;
    finishDate?: string;
    description: string | string[];
    environment?: string;
    missions: string[];
    technologies: string[];
};

export type DetailedTechnologiesExperience = Omit<
    Experience,
    'technologies'
> & {
    technologies: Technology[];
};

export const buildTitle = ({ title, company, client }: Position): string => {
    const employer = typeof company === 'string' ? company : company.name;
    if (client) {
        return `Consultant - ${title} at ${client} (for ${employer})`;
    }
    return `${title} at ${employer}`;
};
