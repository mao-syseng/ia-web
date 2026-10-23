export type Team = "Engineering" | "Design" | "Growth" | "Operations";

export type Level =
  | "Founder"
  | "Executive"
  | "Department Leader"
  | "Staff / Principal"
  | "Lead"
  | "Manager"
  | "Senior"
  | "Mid-level"
  | "Junior"
  | "Specialist"
  | "Support"
  | "Entry Level"
  | "Outsider";

export type Employee = {
  id: number;
  team: Team;
  seniority: number;
  name: string;
  level: Level;
  role: string;
};

export const teams: Team[] = ["Engineering", "Design", "Growth", "Operations"];

export const getAllEmployees = (): Employee[] => [
  {
    id: 33,
    team: "Growth",
    seniority: 6,
    level: "Mid-level",
    role: "Senior Growth Marketer",
    name: "Barbara Brown",
  },
  {
    id: 7,
    team: "Engineering",
    seniority: 6,
    level: "Mid-level",
    role: "Senior Engineer",
    name: "Barbara Anderson",
  },
  {
    id: 47,
    team: "Operations",
    seniority: 5,
    level: "Junior",
    role: "Operations Specialist",
    name: "Barbara Martin",
  },
  {
    id: 19,
    team: "Design",
    seniority: 7,
    level: "Senior",
    role: "Design Manager",
    name: "Barbara Wilson",
  },
  {
    id: 38,
    team: "Growth",
    seniority: 1,
    level: "Outsider",
    role: "Marketing Intern",
    name: "David Anderson",
  },
  {
    id: 24,
    team: "Design",
    seniority: 2,
    level: "Entry Level",
    role: "UX Writer",
    name: "David Jones",
  },
  {
    id: 10,
    team: "Engineering",
    seniority: 3,
    level: "Support",
    role: "QA Engineer",
    name: "David Smith",
  },
  {
    id: 25,
    team: "Design",
    seniority: 1,
    level: "Outsider",
    role: "Design Intern",
    name: "Deborah Miller",
  },
  {
    id: 39,
    team: "Operations",
    seniority: 13,
    level: "Founder",
    role: "Founder",
    name: "Deborah Wilson",
  },
  {
    id: 28,
    team: "Growth",
    seniority: 11,
    level: "Department Leader",
    role: "VP Growth",
    name: "James Anderson",
  },
  {
    id: 42,
    team: "Operations",
    seniority: 10,
    level: "Staff / Principal",
    role: "Operations Director",
    name: "James Johnson",
  },
  {
    id: 14,
    team: "Design",
    seniority: 12,
    level: "Executive",
    role: "CPO",
    name: "James Jones",
  },
  {
    id: 0,
    team: "Engineering",
    seniority: 13,
    level: "Founder",
    role: "Founder",
    name: "James Smith",
  },
  {
    id: 18,
    team: "Design",
    seniority: 8,
    level: "Manager",
    role: "Design Lead",
    name: "John Anderson",
  },
  {
    id: 46,
    team: "Operations",
    seniority: 6,
    level: "Mid-level",
    role: "Senior Operations Specialist",
    name: "John Davis",
  },
  {
    id: 4,
    team: "Engineering",
    seniority: 9,
    level: "Lead",
    role: "Staff Engineer",
    name: "John Jones",
  },
  {
    id: 32,
    team: "Growth",
    seniority: 7,
    level: "Senior",
    role: "Sales Manager",
    name: "John Williams",
  },
  {
    id: 13,
    team: "Design",
    seniority: 13,
    level: "Founder",
    role: "Founder",
    name: "Linda Brown",
  },
  {
    id: 5,
    team: "Engineering",
    seniority: 8,
    level: "Manager",
    role: "Tech Lead",
    name: "Linda Miller",
  },
  {
    id: 43,
    team: "Operations",
    seniority: 9,
    level: "Lead",
    role: "Chief of Staff",
    name: "Linda Williams",
  },
  {
    id: 29,
    team: "Growth",
    seniority: 10,
    level: "Staff / Principal",
    role: "Growth Director",
    name: "Linda Wilson",
  },
  {
    id: 41,
    team: "Operations",
    seniority: 11,
    level: "Department Leader",
    role: "COO",
    name: "Mary Brown",
  },
  {
    id: 1,
    team: "Engineering",
    seniority: 12,
    level: "Executive",
    role: "CTO",
    name: "Mary Johnson",
  },
  {
    id: 27,
    team: "Growth",
    seniority: 12,
    level: "Executive",
    role: "CRO",
    name: "Mary Martin",
  },
  {
    id: 15,
    team: "Design",
    seniority: 11,
    level: "Department Leader",
    role: "VP Design",
    name: "Mary Miller",
  },
  {
    id: 26,
    team: "Growth",
    seniority: 13,
    level: "Founder",
    role: "Founder",
    name: "Michael Davis",
  },
  {
    id: 40,
    team: "Operations",
    seniority: 12,
    level: "Executive",
    role: "CEO",
    name: "Michael Smith",
  },
  {
    id: 12,
    team: "Engineering",
    seniority: 1,
    level: "Outsider",
    role: "Engineering Intern",
    name: "Michael Williams",
  },
  {
    id: 23,
    team: "Design",
    seniority: 3,
    level: "Support",
    role: "UX Researcher",
    name: "Nancy Brown",
  },
  {
    id: 11,
    team: "Engineering",
    seniority: 2,
    level: "Entry Level",
    role: "DevOps Engineer",
    name: "Nancy Johnson",
  },
  {
    id: 51,
    team: "Operations",
    seniority: 1,
    level: "Outsider",
    role: "Operations Intern",
    name: "Nancy Jones",
  },
  {
    id: 37,
    team: "Growth",
    seniority: 2,
    level: "Entry Level",
    role: "Sales Development Rep",
    name: "Nancy Martin",
  },
  {
    id: 3,
    team: "Engineering",
    seniority: 10,
    level: "Staff / Principal",
    role: "Engineering Director",
    name: "Patricia Brown",
  },
  {
    id: 31,
    team: "Growth",
    seniority: 8,
    level: "Manager",
    role: "Growth Lead",
    name: "Patricia Johnson",
  },
  {
    id: 17,
    team: "Design",
    seniority: 9,
    level: "Lead",
    role: "Principal Designer",
    name: "Patricia Martin",
  },
  {
    id: 45,
    team: "Operations",
    seniority: 7,
    level: "Senior",
    role: "Operations Manager",
    name: "Patricia Miller",
  },
  {
    id: 8,
    team: "Engineering",
    seniority: 5,
    level: "Junior",
    role: "Software Engineer",
    name: "Richard Anderson",
  },
  {
    id: 36,
    team: "Growth",
    seniority: 3,
    level: "Support",
    role: "SEO Specialist",
    name: "Richard Davis",
  },
  {
    id: 22,
    team: "Design",
    seniority: 4,
    level: "Specialist",
    role: "Junior Designer",
    name: "Richard Williams",
  },
  {
    id: 50,
    team: "Operations",
    seniority: 2,
    level: "Entry Level",
    role: "HR Coordinator",
    name: "Richard Wilson",
  },
  {
    id: 16,
    team: "Design",
    seniority: 10,
    level: "Staff / Principal",
    role: "Design Director",
    name: "Robert Davis",
  },
  {
    id: 44,
    team: "Operations",
    seniority: 8,
    level: "Manager",
    role: "Operations Lead",
    name: "Robert Jones",
  },
  {
    id: 30,
    team: "Growth",
    seniority: 9,
    level: "Lead",
    role: "Principal Growth Lead",
    name: "Robert Smith",
  },
  {
    id: 2,
    team: "Engineering",
    seniority: 11,
    level: "Department Leader",
    role: "VP Engineering",
    name: "Robert Williams",
  },
  {
    id: 21,
    team: "Design",
    seniority: 5,
    level: "Junior",
    role: "Product Designer",
    name: "Susan Johnson",
  },
  {
    id: 35,
    team: "Growth",
    seniority: 4,
    level: "Specialist",
    role: "Junior Marketer",
    name: "Susan Miller",
  },
  {
    id: 49,
    team: "Operations",
    seniority: 3,
    level: "Support",
    role: "Recruiter",
    name: "Susan Smith",
  },
  {
    id: 9,
    team: "Engineering",
    seniority: 4,
    level: "Specialist",
    role: "Junior Engineer",
    name: "Susan Wilson",
  },
  {
    id: 48,
    team: "Operations",
    seniority: 4,
    level: "Specialist",
    role: "Junior Operations Specialist",
    name: "William Anderson",
  },
  {
    id: 6,
    team: "Engineering",
    seniority: 7,
    level: "Senior",
    role: "Engineering Manager",
    name: "William Davis",
  },
  {
    id: 34,
    team: "Growth",
    seniority: 5,
    level: "Junior",
    role: "Growth Marketer",
    name: "William Jones",
  },
  {
    id: 20,
    team: "Design",
    seniority: 6,
    level: "Mid-level",
    role: "Senior Designer",
    name: "William Smith",
  },
];

const employeeLookup = new Map<number, Employee>(
  getAllEmployees().map((employee) => [employee.id, employee]),
);

export const getEmployeesByIds = (ids: number[]): Employee[] => {
  return ids
    .map((id) => employeeLookup.get(id))
    .filter((employee): employee is Employee => employee !== undefined);
};
