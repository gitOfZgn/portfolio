import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { works, Work } from '@/data/works'
import { getCategoryColor, getSkillCategory } from '@/data/skillsData'

const Gallery  = () => {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {works.map((work) => (
                    <Link href={`/WorkContent/works/${work.id}`} key={work.id}>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg flex flex-col h-full">
                            <div className="relative w-full pt-[56.25%]">
                                <Image
                                    src={work.thumbnailUrl}
                                    alt={work.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4 flex flex-col h-full">
                                <div>
                                    <h3 className="font-bold text-lg mb-2">{work.title}</h3>
                                    {work.date && <p className="text-sm text-gray-600 mb-2">{work.date}</p>}
                                    <p className="text-sm text-gray-700">{work.description}</p>
                                </div>
                                <div className="mt-4 h-30">
                                    <h4 className="font-semibold text-sm mb-2">使用技術：</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {work.skills.map((skill, index) => {
                                            const category = getSkillCategory(skill);
                                            return (
                                                <span
                                                    key={index}
                                                    className={`px-2 py-1 rounded-full text-xs ${category ? getCategoryColor(category) : 'bg-gray-200 text-gray-700'}`}
                                                >
                                                    {skill}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Gallery