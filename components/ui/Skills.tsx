import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faReact, faPython, faJs, faGithub, faAws, faStripe } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faBolt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface CustomIconProps {
    src: string;
    alt: string;
}

type IconType = IconDefinition | CustomIconProps;

interface Skill {
    name: string;
    icon: IconType;
    proficiency: number;
    category: string;
}

const categoryColors: { [key: string]: string } = {
    Frameworks: 'bg-blue-100 text-blue-800',
    Languages: 'bg-green-100 text-green-800',
    Databases: 'bg-yellow-100 text-yellow-800',
    Tools: 'bg-purple-100 text-purple-800',
    Cloud: 'bg-indigo-100 text-indigo-800',
    Services: 'bg-pink-100 text-pink-800',
};

const skills: Skill[] = [
    { name: 'React', icon: faReact, proficiency: 80, category: 'Frameworks' },
    { name: 'Flask', icon: { src: '/images/icon/flask.svg', alt: 'Flask' }, proficiency: 80, category: 'Frameworks' },
    { name: 'Next', icon: { src: '/images/icon/next.svg', alt: 'Next.js' }, proficiency: 75, category: 'Frameworks' },
    { name: 'GitHub', icon: faGithub, proficiency: 85, category: 'Tools' },
    { name: 'C#', icon: faCode, proficiency: 70, category: 'Languages' },
    { name: 'Python', icon: faPython, proficiency: 70, category: 'Languages' },
    { name: 'JavaScript', icon: faJs, proficiency: 90, category: 'Languages' },
    { name: 'Delphi', icon: { src: '/images/icon/delphi.svg', alt: 'Next.js' }, proficiency: 75, category: 'Frameworks' },
    { name: 'MySQL', icon: faDatabase, proficiency: 60, category: 'Databases' },
    { name: 'PostgreSQL', icon: faDatabase, proficiency: 60, category: 'Databases' },
    { name: 'PL/SQL', icon: faCode, proficiency: 60, category: 'Languages' },
    { name: 'AWS', icon: faAws, proficiency: 60, category: 'Cloud' },
    { name: 'Supabase', icon: faBolt, proficiency: 60, category: 'Cloud' },
    { name: 'Stripe', icon: faStripe, proficiency: 60, category: 'Services' },
];

const CustomIcon: React.FC<CustomIconProps> = ({ src, alt }) => (
    <div className="w-6 h-6 relative">
        <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </div>
);

const SkillCard: React.FC<Skill> = ({ name, icon, proficiency, category }) => {
    return (
        <div className={`rounded-lg shadow-md p-3 flex flex-col items-center ${categoryColors[category]}`}>
            <div className="relative w-16 h-16 flex items-center justify-center">
                {isIconDefinition(icon) ? (
                    <FontAwesomeIcon icon={icon} className="text-4xl z-10" />
                ) : (
                    <CustomIcon {...icon} />
                )}
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                    <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.2"
                        strokeWidth="2"
                    />
                    <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray={`${proficiency}, 100`}
                    />
                </svg>
            </div>
            <span className="mt-2 text-sm font-semibold">{name}</span>
        </div>
    );
};

function isIconDefinition(icon: IconType): icon is IconDefinition {
    return (icon as IconDefinition).icon !== undefined;
}

const SkillsSection: React.FC = () => {
    return (
        <div className="max-w-4xl container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
                {skills.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;