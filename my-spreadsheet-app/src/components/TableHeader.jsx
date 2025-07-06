import React from 'react';
import { FileText, Calendar, UserCircle, Link, DollarSign } from 'lucide-react';

function TableHeader() {
  return (
    <thead className="bg-gray-50 sticky top-0 z-10">
      <tr>
        {/* Row number column */}
        <th className="w-8 px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
          #
        </th>
        
        {/* Job Request column */}
        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
          <div className="flex items-center space-x-1">
            <FileText className="w-4 h-4" />
            <span>Job Request</span>
          </div>
        </th>
        
        {/* Submitted column */}
        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>Submitted</span>
          </div>
        </th>
        
        {/* Status column */}
        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 rounded-full bg-gray-400"></div>
            <span>Status</span>
          </div>
        </th>
        
        {/* Submitter column */}
        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
          <div className="flex items-center space-x-1">
            <UserCircle className="w-4 h-4" />
            <span>Submitter</span>
          </div>
        </th>
        
        {/* URL column */}
        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
          <div className="flex items-center space-x-1">
            <Link className="w-4 h-4" />
            <span>URL</span>
          </div>
        </th>
        
        {/* Assigned column */}
        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
          <div className="flex items-center space-x-1">
            <UserCircle className="w-4 h-4" />
            <span>Assigned</span>
          </div>
        </th>
        
        {/* Priority column */}
        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
          Priority
        </th>
        
        {/* Due Date column */}
        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>Due Date</span>
          </div>
        </th>
        
        {/* Est. Value column */}
        <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          <div className="flex items-center space-x-1">
            <DollarSign className="w-4 h-4" />
            <span>Est. Value</span>
          </div>
        </th>
      </tr>
    </thead>
  );
}

export default TableHeader;