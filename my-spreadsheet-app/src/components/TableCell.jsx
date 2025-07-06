import React from 'react';

function TableCell({ value, rowId, columnName, type, isSelected, onClick }) {
  const cellClasses = `px-3 py-2 text-sm border-r border-gray-200 cursor-pointer hover:bg-gray-50 ${
    isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : ''
  }`;

  // Function to get the right color for status badges
  const getStatusColor = (status) => {
    switch (status) {
      case 'In-process':
        return 'bg-yellow-100 text-yellow-800';
      case 'Need to start':
        return 'bg-blue-100 text-blue-800';
      case 'Complete':
        return 'bg-green-100 text-green-800';
      case 'Blocked':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Function to get the right color for priority
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-red-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'Low':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  const renderContent = () => {
    switch (type) {
      case 'status':
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(value)}`}>
            {value}
          </span>
        );
      case 'priority':
        return (
          <span className={`font-medium ${getPriorityColor(value)}`}>
            {value}
          </span>
        );
      case 'url':
        return (
          <span className="text-blue-600 underline">
            {value}
          </span>
        );
      case 'value':
        return (
          <span className="font-medium">
            {value} ₹
          </span>
        );
      default:
        return <span>{value}</span>;
    }
  };

  return (
    <td className={cellClasses} onClick={onClick}>
      {renderContent()}
    </td>
  );
}

export default TableCell;