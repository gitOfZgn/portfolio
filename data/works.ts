export interface Work {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    fullImageUrl: string;
    skills: string[];
    date?: string;
    role?: string;
    url?: string;
    duration?: string;
    challenges?: string[];
    solutions?: string[];
    outcomes?: string[];
    technicalDetails?: string;
    futurePlans?: string[];
    lessonsLearned?: string[];
    keyFeatures?: string[];
    performanceMetrics?: {
        metric: string;
        value: string;
    }[];
}

export const works: Work[] = [
    {
        id: '1',
        title: '某ソーシャルゲーム会員制情報共有サイト',
        description: '会員制ユーザー投稿型情報共有サイトの設計・開発・運用',
        url: 'https://lmf-fr-membership-app.vercel.app/',
        thumbnailUrl: '/portfolio/images/thumbnails/lmffrmembership.png',
        fullImageUrl: '/portfolio/images/thumbnails/lmffrmembership_detail.png',
        skills: ["Next.js", "React", "TypeScript", "tailwind", "HTML/CSS", "Supabase", "GCP", "PostgreSQL","Github","Vercel","stripe"],
        // date: '2021-',
        role: 'フルスタック開発者（Supabase活用）',
        // duration: '2ヶ月（実総工数） + 継続的な改善（保守）',
        // challenges: [
        //     'スプレッドシート運用からの移行',
        //     'スケーラブルなアーキテクチャの設計',
        //     'セキュリティとパフォーマンスの最適化'
        // ],
        // solutions: [
        //     'Supabaseのリアルタイムサブスクリプション機能を活用',
        //     'マイクロサービスアーキテクチャの採用とGCPでのデプロイ',
        //     'CDNの活用とデータベースインデックスの最適化'
        // ],
        outcomes: [
            'データ処理速度の大幅な向上：以前のスプレッドシート方式と比較して、大量データの取り扱いが可能になり、検索速度が約90%改善',
            'ユーザーエクスペリエンスの向上：エラー頻度が99%減少し、スムーズなデータアクセスを実現',
            'セキュリティとアクセス管理の強化：きめ細かなアクセス制御機能により、コンテンツ単位での閲覧権限管理が可能に',
            '管理効率の改善：アクセス承認プロセスの自動化により、管理者の作業時間を約90%削減',
            'クロスプラットフォーム対応：モバイルデバイスを含むあらゆるプラットフォームで一貫した機能と性能を提供し、メンテナンス時間を90%短縮'
        ],
        futurePlans: [
            'ユーザーの改善提案の順次キャッチアップ'
        ],
        keyFeatures: [
            'ログイン認証（google oauth）',
            '画像編集、アップロード機能',
            '高速なデータべース検索機能',
            'stripe決済連携（現在は休止）'
        ],
    },
    {
        id: '2',
        title: '某ソーシャルゲーム攻略ツール',
        description: 'パラメータ上昇要素の特定ツール',
        url: 'https://lmfzgn.pythonanywhere.com/',
        thumbnailUrl: '/portfolio/images/thumbnails/genecalc.png',
        fullImageUrl: '/portfolio/images/thumbnails/genecalc_detail.png',
        skills: ["Python", "Flask", "HTML/CSS"],
        // date: '2021-',
        role: 'フルスタック開発者（pythonanywhere活用）',
        // duration: '1ヶ月（実総工数） + 継続的な改善',
        // challenges: [
        //     'リアルタイムデータ同期の実装',
        //     'スケーラブルなアーキテクチャの設計',
        //     'セキュリティとパフォーマンスの最適化'
        // ],
        // solutions: [
        //     'Supabaseのリアルタイムサブスクリプション機能を活用',
        //     'マイクロサービスアーキテクチャの採用とGCPでのデプロイ',
        //     'CDNの活用とデータベースインデックスの最適化'
        // ],
        outcomes: [
            '誰でも算出可能：パラメータを入力するだけで算出可能なため、人を選ばず、誰でも算出可能に',
            '算出速度の大幅向上：個人差はあるものの手作業算出に比べ算出時間を約50~99%削減',
        ],
        futurePlans: [
            'ユーザーアップロード画像への画像認識によるパラメータ入力の自動化',
        ],
        keyFeatures: [
            '解の自動算出',
            'API連携（所定のJSONリクエストへの応答）'
        ],
    },
];