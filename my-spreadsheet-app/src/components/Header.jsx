import React from 'react';
import { ChevronDown, Search, Bell, MoreHorizontal } from 'lucide-react';
import UserAvatar from './UserAvatar';

function Header() {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      {/* Left side - navigation */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Workspace</span>
          <ChevronDown className="w-4 h-4" />
          <span>Folder 2</span>
          <ChevronDown className="w-4 h-4" />
          <span className="font-medium text-gray-900">Spreadsheet 3</span>
          <MoreHorizontal className="w-4 h-4" />
        </div>
      </div>
      
      {/* Right side - user info and search */}
      <div className="flex items-center space-x-2">
        {/* User avatars */}
        <div className="flex -space-x-1">
          <UserAvatar name="John Doe" size="md" />
          <UserAvatar name="Alice Smith" size="md" />
          <UserAvatar name="Bob Wilson" size="md" />
        </div>
        
        {/* Divider */}
        <div className="w-px h-6 bg-gray-300 mx-2"></div>
        
        {/* Search box */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search within sheet" 
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Notification bell */}
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
        
        {/* Current user */}
        <div className="flex items-center space-x-1">
          <UserAvatar name="John Doe" size="md" />
          <span className="text-sm font-medium">John Doe</span>
          <span className="text-xs text-gray-500">john.doe</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
