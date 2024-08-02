// components/Timeline.tsx
import React from 'react';

interface TimelineEvent {
    id: string;
    startDate: string;
    endDate: string;
    title: string;
    description: string;
}

const events: TimelineEvent[] = [
    {
        id: '1',
        startDate: '',
        endDate: '2019',
        title: '大学卒業',
        description: '',
    },
    {
        id: '2',
        startDate: '2019',
        endDate: '2022',
        title: '某IT企業システム開発',
        description: '2021年',
    },
    {
        id: '3',
        startDate: '2022',
        endDate: '',
        title: 'フリーランスエンジニアとして開発',
        description: '',
    },
];

const Timeline = () => {
    return (
        <div className="max-w-4xl container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 pb-2">Experience</h2>
            <div className="relative">
                {/* タイムラインの軸 */}
                <div className="absolute left-1 md:left-1/2 top-[-1.5rem] bottom-[-2.5rem] w-[0.15rem] bg-blue-200 md:transform md:-translate-x-px rounded-full"></div>

                {/* タイムラインの開始点 */}
                <div className="absolute left-[0.3rem] md:left-1/2 top-[-2.0rem] md:transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
                    </div>
                </div>

                {/* タイムラインイベント */}
                <div className="space-y-8">
                    {events.map((event, index) => (
                        <div key={event.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} ${index > 0 ? 'md:mt-[-3.5rem]' : ''}`}>
                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'} ${index > 0 ? 'md:mt-[-3.5rem]' : ''} ml-6 md:ml-0`}>
                                <div className="relative bg-white p-4 rounded-lg shadow-md">
                                    {/* イベント上部の青い線 */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-400 rounded-t-lg"></div>
                                    <div className="text-sm text-blue-300 mb-1">{`${event.startDate} - ${event.endDate}`}</div>
                                    <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                                    <p className="text-gray-600 text-sm">{event.description}</p>
                                </div>
                            </div>
                            <div className={`absolute left-[-0.05rem] md:left-1/2 w-3 h-3 bg-blue-200 rounded-full md:transform md:-translate-x-1.5 ${index > 0 ? 'md:mt-[-3.5rem]' : ''}`}></div>
                        </div>
                    ))}
                </div>

                {/* タイムラインの終了点 */}
                <div className="absolute left-[0.3rem] md:left-1/2 bottom-[-2.5rem] transform -translate-x-1/2">
                    <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;