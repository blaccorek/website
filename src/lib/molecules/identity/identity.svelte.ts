export type IdentityProps = {
    firstname: string;
    lastname: string;
    jobTitle: string;
};

const capitalizeFirst = (str: string): string =>
    str.length === 0
        ? ''
        : str.charAt(0).toLocaleUpperCase() + str.substring(1);

export const buildFullname = (firstname: string, lastname: string): string =>
    `${capitalizeFirst(firstname)} ${lastname.toLocaleUpperCase()}`;
