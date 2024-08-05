import React from 'react';

const AdditionalInfo = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Strength</h2>
      <div className="relative bg-white p-4 rounded-lg shadow-md">
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-lg"></div>
        <h3 className="text-lg font-bold mb-2">ヒアリングスキル</h3>
        <p className="text-gray-600 text-sm">顧客の要件を深く理解するためのヒアリングには自信があります。過去のプロジェクトでは、顧客の言葉に耳を傾けることで表面的な要求だけでなく、彼らが本質的に求めているものを見抜き、それを基に最適な改修提案を行いました。例えば、顧客が気づいていなかったニーズを洗い出し、「本当に求めている解決策はこれではないですか？」と提案することで、コストを抑えつつ顧客の深い満足を引き出す解決策を提供しました。このアプローチは、仕様変更の手戻りを大幅に減少させ、プロジェクトのスムーズな進行を実現しました。</p>

        <h3 className="text-lg font-bold pt-2 mb-2">マネジメントスキル</h3>
        <p className="text-gray-600 text-sm">チームリーダーとして、複数のプロジェクトを管理し、チームメンバー一人ひとりの能力を最大限に引き出すことに努めています。明確なコミュニケーションと期待の管理を通じて、チームの目標達成に必要な環境を整えることに注力。また、プロジェクトの納期と品質を確実に保つための戦略的なリソース配分を行い、期限内に品質基準を満たす成果を常に提供してきました。顧客との折衝では、バッファ期間の調整により不測の事態への対応を可能にし、プロジェクトのリスクを最小限に抑えることを怠らず、顧客からの信頼獲得にもつながりました。</p>

        <h3 className="text-lg font-bold pt-2 mb-2">顧客対応力</h3>
        <p className="text-gray-600 text-sm">顧客との信頼関係構築に長けており、彼らの期待を超えるサービスを提供することを心がけています。過去には、協力会社の手違いによるマニュアルの未作成という問題が発生した際、迅速に状況を把握し、代替のマニュアルを作成・提供することで問題を解決しました。この行動で顧客から高い評価を受け、信頼関係をさらに深めることができました。</p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
