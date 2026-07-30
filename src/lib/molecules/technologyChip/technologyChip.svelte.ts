export type TechnologyDetails = {
    icon?: string;
    url?: string;
};

export type Technology = {
    name: string;
} & TechnologyDetails;
