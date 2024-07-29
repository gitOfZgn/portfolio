import UrlPreview from '@/components/ui/UrlPreview';
import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-4xl font-bold mb-8">ZGN Portfolio</h1>
            <p className="mb-4">
                現在フリーランスで開発を行っている。以下の開発経験があることを示す。
            </p>
            <ul className="mb-8 text-left">
                <li>要件定義～システム保守まで</li>
                <li>Delphi, MySQL, PostgreSQL, C#, JavaScript, HTML/CSS, PL/SQL, Oracle, React, Python, Flask</li>
                <li>画像認識、自動化、ADB</li>
            </ul>
            <div className="space-y-8 w-full max-w-2xl">
                <UrlPreview url="https://lmf-fr-membership-app.vercel.app">
                    会員制情報共有サイト
                </UrlPreview>
                <p>会員間で投稿した内容を共有するためのプラットフォーム</p>
                <ul className="text-left mb-8">
                    <li>Google OAuth 認証</li>
                    <li>会員へのタスク振り</li>
                    <li>画像クロッパー</li>
                    <li>データ検索</li>
                </ul>
                <UrlPreview url="https://lmfzgn.pythonanywhere.com">
                    ゲーム攻略ツール
                </UrlPreview>
                <p>最適化問題の探索による秘伝発現数の算出</p>
                <p>JSON 形式のリクエストがあれば外部連携可能</p>
            </div>
        </div>
    );
};

export default Home;
