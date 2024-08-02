"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faBookOpen, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Timeline from '@/components/ui/Timeline';
import ResumeContent from './ResumeContent/page';
import WorksContent from './WorkContent/page';

interface NavItemProps {
    icon: IconDefinition;
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const NavItem = ({ icon, label, isActive, onClick }: NavItemProps) => (
    <button
        className={`flex flex-col items-center justify-center w-24 h-20 pb-0 group ${isActive ? 'text-blue-500' : 'text-gray-200'}`}
        onClick={onClick}
    >
        <FontAwesomeIcon icon={icon} className={`text-5xl ${isActive ? 'text-blue-500' : 'text-gray-200 '}`} />
        <span className="mt-1.5 text-sm">{label}</span>
        <div className={`mt-0.5 h-1 w-full transform rounded-lg scale-x-0 transition-transform duration-300 ${isActive ? 'bg-blue-500 scale-x-100' : 'group-hover:scale-x-100 group-hover:bg-blue-300'}`} />
    </button>
);

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('Resume');

    const navItems = [
        { icon: faFileLines, label: 'Resume' },
        { icon: faBookOpen, label: 'Works' },
        // { icon: faEllipsisH, label: 'More' },
    ];

    return (
        <div className="w-full border-t-[0.1rem] border-gray-200">
            <nav className="pt-4 flex justify-center space-x-4 bg-white">
                {navItems.map((item) => (
                    <NavItem
                        key={item.label}
                        icon={item.icon}
                        label={item.label}
                        isActive={activeTab === item.label}
                        onClick={() => setActiveTab(item.label)}
                    />
                ))}
            </nav>
            <div>
                {activeTab === 'Resume' && <ResumeContent />}
                {activeTab === 'Works' && <WorksContent />}
                {/* {activeTab === 'More' && <MoreContent />} */}
            </div>
        </div>
    );
};

export default Navbar;