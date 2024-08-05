import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faReact, faPython, faJs, faGithub, faAws, faStripe } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faBolt, faCode } from '@fortawesome/free-solid-svg-icons';

// SVGRを使用してSVGをインポート
import svgNextjs from '@/public/images/icons/nextjs.svg';
import svgFlask from '@/public/images/icons/flask.svg';
import svgDelphi from '@/public/images/icons/delphi.svg';
import svgGcp from '@/public/images/icons/gcp.svg';
import svgSlack from '@/public/images/icons/slack.svg';
import svgMSTeams from '@/public/images/icons/teams.svg';
import svgRChat from '@/public/images/icons/rocketchat.svg';
import svgPLSQL from '@/public/images/icons/plsql.svg';
import svgBacklog from '@/public/images/icons/backlog.svg';
import svgCSharp from '@/public/images/icons/csharp.svg';
import svgVercel from '@/public/images/icons/vercel.svg';
import svgTailwind from '@/public/images/icons/tailwind.svg';
import svgTypescript from '@/public/images/icons/typescript.svg';

export enum SkillCategory {
    Frameworks = 'Frameworks',
    Languages = 'Languages',
    Databases = 'Databases',
    Tools = 'Tools',
    Management = 'Management',
    Cloud = 'Cloud',
    Services = 'Services',
}

export interface Skill {
    name: string;
    icon: IconDefinition | React.FC<React.SVGProps<SVGSVGElement>>;
    proficiency: number;
    category: SkillCategory;
}

export const categoryColors: { [key in SkillCategory]: string } = {
    [SkillCategory.Frameworks]: 'bg-blue-100 text-blue-800',
    [SkillCategory.Languages]: 'bg-green-100 text-green-800',
    [SkillCategory.Databases]: 'bg-yellow-100 text-yellow-800',
    [SkillCategory.Tools]: 'bg-purple-100 text-purple-800',
    [SkillCategory.Management]: 'bg-red-100 text-red-800',
    [SkillCategory.Cloud]: 'bg-orange-100 text-orange-800',
    [SkillCategory.Services]: 'bg-pink-100 text-pink-800',
};

export const skills: Skill[] = [
    { name: 'React', icon: faReact, proficiency: 85, category: SkillCategory.Frameworks },
    { name: 'Flask', icon: svgFlask, proficiency: 30, category: SkillCategory.Frameworks },
    { name: 'Next.js', icon: svgNextjs, proficiency: 85, category: SkillCategory.Frameworks },
    { name: 'Python', icon: faPython, proficiency: 75, category: SkillCategory.Languages },
    { name: 'JavaScript', icon: faJs, proficiency: 85, category: SkillCategory.Languages },
    { name: 'TypeScript', icon: svgTypescript, proficiency: 85, category: SkillCategory.Languages },
    { name: 'HTML/CSS', icon: faCode, proficiency: 85, category: SkillCategory.Languages },
    { name: 'Tailwind', icon: svgTailwind, proficiency: 85, category: SkillCategory.Languages },
    { name: 'Delphi', icon: svgDelphi, proficiency: 80, category: SkillCategory.Languages },
    { name: 'C#', icon: svgCSharp, proficiency: 50, category: SkillCategory.Languages },
    { name: 'PL/SQL', icon: svgPLSQL, proficiency: 80, category: SkillCategory.Languages },
    { name: 'AWS', icon: faAws, proficiency: 50, category: SkillCategory.Cloud },
    { name: 'Supabase', icon: faBolt, proficiency: 85, category: SkillCategory.Cloud },
    { name: 'GCP', icon: svgGcp, proficiency: 50, category: SkillCategory.Cloud },
    { name: 'Vercel', icon: svgVercel, proficiency: 75, category: SkillCategory.Cloud },
    { name: 'Stripe', icon: faStripe, proficiency: 85, category: SkillCategory.Services },
    { name: 'Slack', icon: svgSlack, proficiency: 75, category: SkillCategory.Tools },
    { name: 'Teams', icon: svgMSTeams, proficiency: 75, category: SkillCategory.Tools },
    { name: 'RocketChat', icon: svgRChat, proficiency: 75, category: SkillCategory.Tools },
    { name: 'MySQL', icon: faDatabase, proficiency: 70, category: SkillCategory.Databases },
    { name: 'PostgreSQL', icon: faDatabase, proficiency: 70, category: SkillCategory.Databases },
    { name: 'GitHub', icon: faGithub, proficiency: 75, category: SkillCategory.Management },
    { name: 'Backlog', icon: svgBacklog, proficiency: 50, category: SkillCategory.Management },
];

export const getCategoryColor = (category: SkillCategory): string => {
    return categoryColors[category] || 'bg-gray-200 text-gray-700';
};

export const getSkillCategory = (skillName: string): SkillCategory | undefined => {
    const skill = skills.find(s => s.name.toLowerCase() === skillName.toLowerCase());
    return skill?.category;
};

export type ProficiencyLevel = {
    level: number;
    label: string;
    description: string;
};

export const proficiencyLevels: ProficiencyLevel[] = [
    {
        level: 25,
        label: "Beginner",
        description: "Learning basics, working on projects as a member"
    },
    {
        level: 50,
        label: "Intermediate",
        description: "Completed courses, contributed to projects as a member"
    },
    {
        level: 75,
        label: "Advanced",
        description: "Professional experience, built projects as a leader / manager"
    },
    {
        level: 100,
        label: "Expert",
        description: "Year of professional experience, led complex projects as a manager"
    }
];