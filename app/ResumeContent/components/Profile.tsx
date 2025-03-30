import React from 'react';
import Image from 'next/image';
import GithubIcon from '@/public/images/icons/github.svg';

const ProfilePage = () => {
    return (
        <div className="w-full  mx-auto">
            <div className="relative h-40 bg-gradient-to-b from-blue-100 to-blue-300"></div>
            <div className="relative -mt-20 text-center">
                <div className="mt-4 inline-block rounded-full overflow-hidden border-4 border-white">
                    <Image
                        src={'/portfolio/images/top.jpg'}
                        alt=""
                        width={120}
                        height={120}
                    />
                </div>
                <h1 className="mt-2 text-xl font-bold">
                    ZGN
                </h1>
                <p className="pt-1 text-xs text-gray-600">ゼニア</p>
                <p className="pt-3 text-xs text-gray-950">
                    4年間IT企業に勤め、現在はフリーランスエンジニア<br />
                    趣味はお菓子作り、効率化、ビリヤード、洋ドラ鑑賞（Suits3周）
                </p>
                <div className="mt-4 flex justify-center">
                    <a href="https://github.com/gitOfZgn" className="text-gray-500">
                        <GithubIcon className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;