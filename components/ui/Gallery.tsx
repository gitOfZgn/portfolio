import React from 'react'

interface ProductName {
    id: string;
    title: string;
    description: string;
    skills: string[];
}

const events: ProductName[] = [
    {
        id: '1',
        title: '会員制情報共有サイト',
        description: '会員制情報共有サイト',
        skills: ["Next14","React","typescript","tailwind","HTML/CSS","supabase","GCP"]
    },
    {
        id: '2',
        title: '某ソーシャルゲーム攻略ツール',
        description: 'ステータス上昇に影響のある要素の発現数を算出するツール',
        skills: ["Python","Flask","HTML/CSS"]
    },
    {
        id: '3',
        title: '',
        description: '',
        skills: ["","",""]
    },
    {
        id: '4',
        title: '',
        description: '',
        skills: ["","",""]
    },
]

const Gallery = () => {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <div className="relative bg-white p-4 rounded-lg shadow-md">
            </div>
        </div>
    )
}

export default Gallery