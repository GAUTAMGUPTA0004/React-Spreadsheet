import React from 'react';
import TableCell from './TableCell';

function TableRow({ row, selectedCell, onCellClick }) {
  const handleCellClick = (columnName) => {
    onCellClick(row.id, columnName);
  };

  const isCellSelected = (columnName) => {
    return selectedCell === `${row.id}-${columnName}`;
  };

  return (
    <tr className="hover:bg-gray-50">
      {/* Row number */}
      <td className="px-3 py-3 text-sm text-gray-500 border-r border-gray-200 w-8">
        {row.id}
      </td>
      
      {/* All the data cells */}
      <TableCell 
        value={row.jobRequest} 
        rowId={row.id} 
        columnName="jobRequest" 
        type="text"
        isSelected={isCellSelected('jobRequest')}
        onClick={() => handleCellClick('jobRequest')}
      />
      <TableCell 
        value={row.submitted} 
        rowId={row.id} 
        columnName="submitted" 
        type="text"
        isSelected={isCellSelected('submitted')}
        onClick={() => handleCellClick('submitted')}
      />
      <TableCell 
        value={row.status} 
        rowId={row.id} 
        columnName="status" 
        type="status"
        isSelected={isCellSelected('status')}
        onClick={() => handleCellClick('status')}
      />
      <TableCell 
        value={row.submitter} 
        rowId={row.id} 
        columnName="submitter" 
        type="text"
        isSelected={isCellSelected('submitter')}
        onClick={() => handleCellClick('submitter')}
      />
      <TableCell 
        value={row.url} 
        rowId={row.id} 
        columnName="url" 
        type="url"
        isSelected={isCellSelected('url')}
        onClick={() => handleCellClick('url')}
      />
      <TableCell 
        value={row.assigned} 
        rowId={row.id} 
        columnName="assigned" 
        type="text"
        isSelected={isCellSelected('assigned')}
        onClick={() => handleCellClick('assigned')}
      />
      <TableCell 
        value={row.priority} 
        rowId={row.id} 
        columnName="priority" 
        type="priority"
        isSelected={isCellSelected('priority')}
        onClick={() => handleCellClick('priority')}
      />
      <TableCell 
        value={row.dueDate} 
        rowId={row.id} 
        columnName="dueDate" 
        type="text"
        isSelected={isCellSelected('dueDate')}
        onClick={() => handleCellClick('dueDate')}
      />
      <TableCell 
        value={row.estValue} 
        rowId={row.id} 
        columnName="estValue" 
        type="value"
        isSelected={isCellSelected('estValue')}
        onClick={() => handleCellClick('estValue')}
      />
    </tr>
  );
}

export default TableRow;
