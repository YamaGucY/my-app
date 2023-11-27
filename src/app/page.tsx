// pages/index.tsx
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Yukita Yamaguchi</h1>
          <p className="text-sm text-gray-600">大学三年生 | 情報工学専攻</p>
        </header>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">自己紹介</h2>
          <p className="text-gray-700">
            研究内容はコンピュータビジョンで、最近はWebの勉強も始めています。
            趣味はサッカーです。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">ポートフォリオ</h2>
          {/* ここにポートフォリオのコンテンツやリンクを追加 */}
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">連絡先</h2>
          <p>090-1111-2222</p>
          <p>abc@abc.com</p>
        </section>

        <footer className="text-center text-gray-500">
          <p>&copy; 2023 Yukita Yamaguchi</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
