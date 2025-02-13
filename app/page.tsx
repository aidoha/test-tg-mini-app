import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand(); // Разворачивает WebView
      console.log('Telegram WebApp initialized', tg.initDataUnsafe);

      if (tg.initDataUnsafe?.user) {
        setUser(tg.initDataUnsafe.user);
      }
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Hello, Telegram Mini App!</h1>
      {user ? (
        <div className="mt-4 p-4 bg-white shadow rounded">
          <p className="text-lg">Welcome, {user.first_name}!</p>
          <p className="text-sm text-gray-600">Username: @{user.username || 'N/A'}</p>
        </div>
      ) : (
        <p className="mt-4 text-gray-600">Loading user data...</p>
      )}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => alert('Button Clicked!')}
      >
        Click me
      </button>
    </div>
  );
}
