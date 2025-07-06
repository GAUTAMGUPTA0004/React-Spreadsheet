import React from 'react';
import { FileText, MoreHorizontal, Plus } from 'lucide-react';

function TabNavigation({ activeTab, onTabClick, onButtonClick }) {
  const tabs = [
    { id: 'Q3 Financial Overview', label: 'Q3 Financial Overview', icon: FileText, color: 'blue' },
    { id: 'ABC', label: 'ABC', icon: null, color: 'green' },
    { id: 'Answer a question', label: 'Answer a question', icon: null, color: 'purple' },
    { id: 'Extract', label: 'Extract', icon: null, color: 'orange' }
  ];

  const getTabClasses = (tab) => {
    const isActive = activeTab === tab.id;
    const baseClasses = "flex items-center space-x-2 px-3 py-2 text-sm rounded-t-lg";
    
    if (isActive) {
      return `${baseClasses} bg-${tab.color}-50 text-${tab.color}-600 border-b-2 border-${tab.color}-600`;
    }
    return `${baseClasses} text-gray-600 hover:text-gray-900`;
  };

  return (
    <div className="bg-white border-b border-gray-200 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-1">
        {tabs.map((tab) => (
          <button 
            key={tab.id}
            onClick={() => onTabClick(tab.id)}
            className={getTabClasses(tab)}
          >
            {tab.icon && <tab.icon className="w-4 h-4" />}
            <span>{tab.label}</span>
            {tab.id !== 'Q3 Financial Overview' && <MoreHorizontal className="w-4 h-4" />}
          </button>
        ))}
      </div>
      
      {/* Add new tab button */}
      <button 
        onClick={() => onButtonClick('add-tab')}
        className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}

export default TabNavigation;