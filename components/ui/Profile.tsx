import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const dir = String(process.env.BACKEND_URL)

const ProfilePage = () => {
    return (
        <div className="w-full  mx-auto">
            <div className="relative h-40 bg-gradient-to-b from-blue-100 to-blue-300"></div>
            <div className="relative -mt-20 text-center">
                <div className="mt-4 inline-block rounded-full overflow-hidden border-4 border-white">
                    <Image
                        src={'/images/top.jpg'}
                        alt=""
                        width={120}
                        height={120}
                    />
                </div>
                <h1 className="mt-2 text-xl font-bold">
                    ZGN
                </h1>
                <p className="pt-1 text-xs text-gray-600">ゼニア</p>
                <p className="pt-3 text-xs text-gray-950">エンジニア歴4年。<br />
                    3年間IT企業に勤め、現在はフリーランスエンジニア<br />
                    趣味はお菓子作り、ビリヤード、映画鑑賞
                </p>
                <div className="mt-4">
                    <a href="https://github.com/gitOfZgn" className="text-gray-500">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;