type Position = {
    company: string | { name: string; url: string; description: string }; // Consulting company or main employer
    title: string;
    client?: string; // End client if applicable
};

type Experience = {
    position: Position;
    startDate: string;
    finishDate?: string;
    description: string;
    environment?: string;
    missions: string[];
    technologies: string[];
};

type DetailedTechnologiesExperience = Omit<Experience, 'technologies'> & {
    technologies: Technology[];
};
