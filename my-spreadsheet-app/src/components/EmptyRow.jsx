import React from 'react';
import UserAvatar from './UserAvatar';

function EmptyRow({ rowNumber, showAvatars = false }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-3 py-3 text-sm text-gray-500 border-r border-gray-200 w-8">
        {rowNumber}
      </td>
      <td className="px-3 py-3 text-sm border-r border-gray-200"></td>
      <td className="px-3 py-3 text-sm border-r border-gray-200"></td>
      <td className="px-3 py-3 text-sm border-r border-gray-200"></td>
      <td className="px-3 py-3 text-sm border-r border-gray-200"></td>
      <td className="px-3 py-3 text-sm border-r border-gray-200"></td>
      <td className="px-3 py-3 text-sm border-r border-gray-200"></td>
      <td className="px-3 py-3 text-sm border-r border-gray-200"></td>
      <td className="px-3 py-3 text-sm border-r border-gray-200"></td>
      <td className="px-3 py-3 text-sm border-r border-gray-200 relative">
        {showAvatars && (
          <div className="flex -space-x-1 absolute right-3 top-1/2 transform -translate-y-1/2">
            <UserAvatar name="Mike Johnson" size="sm" />
            <UserAvatar name="Sarah Davis" size="sm" />
            <UserAvatar name="Tom Wilson" size="sm" />
          </div>
        )}
      </td>
    </tr>
  );
}

export default EmptyRow;