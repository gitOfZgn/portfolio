import React from 'react';
import Image from 'next/image';
import { works } from '@/data/works';
import { getCategoryColor, getSkillCategory } from '@/data/skillsData';

interface WorkPageProps {
    params: { id: string }
}

export async function generateStaticParams() {
    return works.map((work) => ({
        id: work.id,
    }));
}

const WorkPage = ({ params }: WorkPageProps) => {
    const work = works.find(w => w.id === params.id);

    if (!work) {
        return <div className="text-center text-2xl mt-20 text-gray-600">作品が見つかりません</div>;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6 text-center">{work.title}</h1>
            <div className="mb-8 shadow-lg rounded-lg overflow-hidden" style={{ maxWidth: '896px', width: '100%' }}>
                <Image
                    src={work.fullImageUrl}
                    alt={work.title}
                    width={1920}
                    height={1080}
                    layout="responsive"
                    className="object-cover"
                />
            </div>
            <div className="bg-slate-100 p-6 rounded-lg shadow-md mb-8">
                <p className="text-gray-600 mb-4">{work.description}</p>
                <div className="mt-4">
                    <h3 className="text-2xl font-semibold mb-2">使用技術</h3>
                    <div className="flex flex-wrap gap-2">
                        {work.skills.map((skill, index) => {
                            const category = getSkillCategory(skill);
                            return (
                                <span
                                    key={index}
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${category ? getCategoryColor(category) : 'bg-gray-200 text-gray-700'}`}
                                >
                                    {skill}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">プロジェクト詳細</h2>
                    <p className="text-gray-600"><strong>期間:</strong> {work.date}</p>
                    {work.role && <p className="text-gray-600"><strong>役割:</strong> {work.role}</p>}
                    {work.duration && <p className="text-gray-600"><strong>プロジェクト期間:</strong> {work.duration}</p>}
                    {work.url && (
                        <p className="text-gray-600">
                            <strong>URL:</strong>{' '}
                            <a
                                href={work.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 underline"
                            >
                                {work.url}
                            </a>
                        </p>
                    )}
                </div>
                {work.keyFeatures && (
                    <div className="bg-slate-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">主な機能</h2>
                        <ul className="list-disc pl-5">
                            {work.keyFeatures.map((feature, index) => (
                                <li key={index} className="text-gray-600">{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {work.challenges && (
                    <div className="bg-slate-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">課題</h2>
                        <ul className="list-disc pl-5">
                            {work.challenges.map((challenge, index) => (
                                <li key={index} className="text-gray-600">{challenge}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {work.solutions && (
                    <div className="bg-slate-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">解決策</h2>
                        <ul className="list-disc pl-5">
                            {work.solutions.map((solution, index) => (
                                <li key={index} className="text-gray-600">{solution}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div> */}
            {work.outcomes && (
                <div className="bg-slate-100 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-bold mb-4">成果</h2>
                    <ul className="list-disc pl-5">
                        {work.outcomes.map((outcome, index) => (
                            <li key={index} className="text-gray-600">{outcome}</li>
                        ))}
                    </ul>
                </div>
            )}
            {work.technicalDetails && (
                <div className="bg-slate-100 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-bold mb-4">技術的詳細</h2>
                    <p className="text-gray-600">{work.technicalDetails}</p>
                </div>
            )}
            {work.performanceMetrics && (
                <div className="bg-slate-100 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-bold mb-4">パフォーマンス指標</h2>
                    <ul className="list-disc pl-5">
                        {work.performanceMetrics.map((metric, index) => (
                            <li key={index} className="text-gray-600"><strong>{metric.metric}:</strong> {metric.value}</li>
                        ))}
                    </ul>
                </div>
            )}
            {work.lessonsLearned && (
                <div className="bg-slate-100 p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-bold mb-4">学んだこと</h2>
                    <ul className="list-disc pl-5">
                        {work.lessonsLearned.map((lesson, index) => (
                            <li key={index} className="text-gray-600">{lesson}</li>
                        ))}
                    </ul>
                </div>
            )}
            {work.futurePlans && (
                <div className="bg-slate-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">今後の計画</h2>
                    <ul className="list-disc pl-5">
                        {work.futurePlans.map((plan, index) => (
                            <li key={index} className="text-gray-600">{plan}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default WorkPage;