import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { skills, Skill, getCategoryColor, proficiencyLevels } from '@/data/skillsData';

const SkillCard: React.FC<Skill> = ({ name, icon, proficiency, category }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`rounded-lg shadow-md p-3 flex flex-col items-center ${getCategoryColor(category)} transition-shadow duration-300 hover:shadow-lg`}>
            <div className="relative w-16 h-16 flex items-center justify-center">
                {typeof icon === 'function' ? (
                    icon({ className: "w-9 h-9" })
                ) : (
                    <FontAwesomeIcon
                        icon={icon as IconDefinition}
                        className="w-9 h-9"
                    />
                )}
                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                    <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.2"
                        strokeWidth="3"
                    />
                    <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray={`${animate ? proficiency : 0}, 100`}
                        className={`transition-all duration-1000 ease-out ${animate ? 'skill-progress' : ''}`}
                    />
                </svg>
            </div>
            <span className="mt-2 text-sm font-semibold">{name}</span>
        </div>
    );
};

const ProficiencyLegend: React.FC = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="mt-8 bg-gray-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Proficiency Levels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {proficiencyLevels.map((level) => (
                    <div key={level.level} className="flex items-start h-full">
                        <div className="w-8 h-8 flex-shrink-0 mr-3">
                            <svg className="w-full h-full" viewBox="0 0 36 36">
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeOpacity="0.2"
                                    strokeWidth="3"
                                />
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeDasharray={`${animate ? level.level : 0}, 100`}
                                    className={`transition-all duration-1000 ease-out ${animate ? 'skill-progress' : ''}`}
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col h-full">
                            <p className="font-semibold">{level.label}</p>
                            <p className="text-sm text-gray-600 mt-1">{level.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const SkillsSection: React.FC = () => {
    return (
        <div className="max-w-4xl container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
                {skills.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                ))}
            </div>
            <ProficiencyLegend />
        </div>
    );
};

export default SkillsSection;