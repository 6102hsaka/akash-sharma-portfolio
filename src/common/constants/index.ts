import { ICertificate } from "../../model/certificate";
import { IExperience } from "../../model/experience";

export const mailId: string = "akashsharma15105@gmail.com";
export const githubUrl: string = "https://github.com/6102hsaka";
export const linkedInUrl: string =
    "https://www.linkedin.com/in/akash-sharma-a09016162/";
export const leetcodeUrl: string = "https://leetcode.com/akashsharma15105/";
export const hackerRankUrl: string =
    "https://www.hackerrank.com/akashsharma15105";
export const resumeUrl: string =
    "https://drive.google.com/file/d/1RIm1JiEtqsKphXtKiJtvbfs-VIm_RExa/view?usp=sharing";

export const keySkills: string[] = [
    "JavaScript",
    "React JS",
    "Redux, Redux-saga",
    "Jest / Enzyme",
    "Java",
    "Springboot",
    "PostgreSQL",
    "Firebase",
    "Power BI",
    "GIT",
];

export const certificates: ICertificate[] = [
    {
        name: "AZ-900",
        description: "Microsoft Certified: Azure Fundamentals",
        url: "https://www.credly.com/badges/15c7186c-10eb-46dc-9673-6aa6dc1f447e",
        imageUri: "/az900.webp",
    },
    {
        name: "DP-900",
        description: "Microsoft Certified: Azure Data Fundamentals",
        url: "https://www.credly.com/badges/8ba2be47-923b-4d56-b614-abe92910a2a1/public_url",
        imageUri: "/dp900.webp",
    },
    {
        name: "DP-203",
        description: "Microsoft Certified: Azure Data Engineer Associate",
        url: "https://www.credly.com/badges/e3df02bf-c1e4-4cc2-9b15-8cbbf8436a07",
        imageUri: "/dp203.webp",
    },
];

export const internshipExperience: IExperience[] = [
    {
        role: "Full Stack Intern",
        company: "Cognizant",
        startDate: "January, 2020",
        endDate: "May, 2020",
    },
    {
        role: "Summer Intern",
        company: "Tata Consultancy Services",
        startDate: "June, 2019",
        endDate: "August, 2019",
    },
];

export const fulltimeExperience: IExperience[] = [
    {
        role: "Full Stack Engineer",
        company: "Cognizant",
        startDate: "January, 2021",
        endDate: "Present",
    },
];
