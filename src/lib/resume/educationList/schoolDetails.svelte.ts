type SchoolTime = {
    year: number;
    month?: number;
};

interface School {
    name: string;
    diploma?: string;
    description?: string;
    startedOn?: SchoolTime;
    finishedOn: SchoolTime;
}
