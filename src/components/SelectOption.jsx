import { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('tab3');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="rounded-md grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col w-full h-max gap-2">
          <button
            className={`w-full py-2 px-2 text-sm font-semibold ${
              activeTab === 'tab1' ? 'bg-blue-500 text-white' : 'text-gray-700 bg-zinc-900'
            }`}
            onClick={() => handleTabClick('tab1')}
          >
            Tab 1
          </button>
          <button
            className={`w-full flex-1 py-2 px-2 text-sm font-semibold ${
              activeTab === 'tab2' ? 'bg-blue-500 text-white' : 'text-gray-700 bg-zinc-900'
            }`}
            onClick={() => handleTabClick('tab2')}
          >
            Tab 2
          </button>
          <button
            className={`w-full flex-1 py-2 px-2 text-sm font-semibold ${
              activeTab === 'tab3' ? 'bg-blue-500 text-white' : 'text-gray-700 bg-zinc-900'
            }`}
            onClick={() => handleTabClick('tab3')}
          >
            Tab 3
          </button>
        </div>
        <div className="p-4">
          {activeTab === 'tab1' && <p>Contenido de la pestaña 1</p>}
          {activeTab === 'tab2' && <p>Contenido de la pestaña 2</p>}
          {activeTab === 'tab3' && <p>Contenido de la pestaña 3</p>}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
