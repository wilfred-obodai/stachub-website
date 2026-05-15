import { useState, useEffect } from 'react';

interface MacBookMockupProps {
  screens: React.ReactNode[];
  className?: string;
}

export function MacBookMockup({ screens, className = "" }: MacBookMockupProps) {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [screens.length]);

  return (
    <div className={`relative ${className}`}>
      {/* MacBook Frame */}
      <div className="relative bg-gray-800 rounded-t-xl p-3 shadow-2xl">
        {/* Screen bezel */}
        <div className="bg-black rounded-lg overflow-hidden border-2 border-gray-900">
          {/* Screen content */}
          <div className="relative aspect-[16/10] bg-white">
            {screens.map((screen, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentScreen ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {screen}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* MacBook base */}
      <div className="h-2 bg-gray-700 rounded-b-xl"></div>
      <div className="h-1 bg-gray-600 rounded-b-lg mx-auto" style={{ width: '60%' }}></div>
    </div>
  );
}

interface iPhoneMockupProps {
  screens: React.ReactNode[];
  className?: string;
}

export function iPhoneMockup({ screens, className = "" }: iPhoneMockupProps) {
  const [currentScreen, setCurrentScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [screens.length]);

  return (
    <div className={`relative ${className}`}>
      {/* iPhone Frame */}
      <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-2xl z-10"></div>

        {/* Screen */}
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
          {screens.map((screen, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentScreen ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {screen}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// RetailTrack Dashboard Screen
export function RetailTrackDashboard() {
  return (
    <div className="w-full h-full bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-16 bg-[#1E40AF] flex flex-col items-center py-4 gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-lg"></div>
        <div className="w-10 h-10 bg-white/10 rounded-lg"></div>
        <div className="w-10 h-10 bg-white/10 rounded-lg"></div>
        <div className="w-10 h-10 bg-white/10 rounded-lg"></div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">
        {/* Stats cards */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Revenue</div>
            <div className="text-lg font-bold text-[#1E40AF]">₵12.5K</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Sales</div>
            <div className="text-lg font-bold text-[#1E40AF]">234</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Profit</div>
            <div className="text-lg font-bold text-green-600">₵4.2K</div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="text-xs text-gray-500 mb-1">Staff</div>
            <div className="text-lg font-bold text-[#1E40AF]">12</div>
          </div>
        </div>

        {/* Staff leaderboard */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-sm font-semibold mb-3">Top Staff Performance</div>
          <div className="space-y-2">
            {['Kwame A.', 'Ama B.', 'Kofi C.'].map((name, i) => (
              <div key={i} className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#1E40AF] text-white text-xs flex items-center justify-center">{i + 1}</div>
                  <span className="text-sm">{name}</span>
                </div>
                <span className="text-sm font-semibold text-[#F59E0B]">₵{(5 - i) * 1.2}K</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// RetailTrack Cashier Screen
export function RetailTrackCashier() {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      {/* Header */}
      <div className="bg-[#1E40AF] text-white p-4">
        <div className="text-xs opacity-80 mb-1">RetailTrack</div>
        <div className="text-lg font-bold">New Sale</div>
      </div>

      {/* Search bar */}
      <div className="p-4">
        <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-500">Search products...</div>
      </div>

      {/* Sales list */}
      <div className="flex-1 px-4 space-y-2">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">Rice (5kg)</span>
            <span className="text-sm font-bold">₵45</span>
          </div>
          <div className="text-xs text-gray-500">Qty: 2</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">Cooking Oil</span>
            <span className="text-sm font-bold">₵28</span>
          </div>
          <div className="text-xs text-gray-500">Qty: 1</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">Sugar (1kg)</span>
            <span className="text-sm font-bold">₵12</span>
          </div>
          <div className="text-xs text-gray-500">Qty: 3</div>
        </div>
      </div>

      {/* Total and action */}
      <div className="p-4 border-t">
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-2xl font-bold text-[#1E40AF]">₵154</span>
        </div>
        <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold">
          Record Sale
        </button>
      </div>
    </div>
  );
}

// Inventory Screen
export function RetailTrackInventory() {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      <div className="bg-[#1E40AF] text-white p-4">
        <div className="text-lg font-bold">Inventory</div>
      </div>
      <div className="flex-1 p-4 space-y-2">
        {['Rice (5kg)', 'Cooking Oil', 'Sugar (1kg)', 'Flour'].map((item, i) => (
          <div key={i} className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
            <div>
              <div className="text-sm font-medium">{item}</div>
              <div className="text-xs text-gray-500">Stock: {42 - i * 5}</div>
            </div>
            <div className="text-sm font-bold text-[#F59E0B]">₵{(15 + i * 10)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Coming Soon Blurred Screen
export function ComingSoonScreen() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">
      {/* Blurred shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-50"></div>

      {/* Coming soon text */}
      <div className="text-center z-10">
        <div className="text-6xl mb-4">🔮</div>
        <div className="text-2xl font-bold text-gray-700">Coming Soon</div>
      </div>
    </div>
  );
}
