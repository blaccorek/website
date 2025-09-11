type Position = {
    company: string; // Consulting company or main employer
    title: string;
    client?: string; // End client if applicable
};

type ExperienceDetails = {
    position: Position;
    startDate: string;
    finishDate?: string;
    description: string;
    tasks: string[];
    technologies: string[];
};
