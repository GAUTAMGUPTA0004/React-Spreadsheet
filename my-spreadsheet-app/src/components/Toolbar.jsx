import React from 'react';
import { ChevronDown, Eye, ArrowUpDown, Filter, BarChart3, Upload, Download, Share, Plus } from 'lucide-react';

function Toolbar({ onButtonClick }) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      {/* Left side toolbar */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => onButtonClick('toolbar')}
          className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <span>Tool bar</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => onButtonClick('hide-fields')}
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <Eye className="w-4 h-4" />
            <span>Hide fields</span>
          </button>
          
          <button 
            onClick={() => onButtonClick('sort')}
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowUpDown className="w-4 h-4" />
            <span>Sort</span>
          </button>
          
          <button 
            onClick={() => onButtonClick('filter')}
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          
          <button 
            onClick={() => onButtonClick('cell-view')}
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <BarChart3 className="w-4 h-4" />
            <span>Cell view</span>
          </button>
        </div>
      </div>
      
      {/* Right side toolbar */}
      <div className="flex items-center space-x-3">
        <button 
          onClick={() => onButtonClick('import')}
          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <Upload className="w-4 h-4" />
          <span>Import</span>
        </button>
        
        <button 
          onClick={() => onButtonClick('export')}
          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
        
        <button 
          onClick={() => onButtonClick('share')}
          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <Share className="w-4 h-4" />
          <span>Share</span>
        </button>
        
        <button 
          onClick={() => onButtonClick('new-action')}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800"
        >
          <Plus className="w-4 h-4" />
          <span>New Action</span>
        </button>
      </div>
    </div>
  );
}

export default Toolbar;