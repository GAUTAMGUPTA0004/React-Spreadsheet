import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import EmptyRow from './EmptyRow';

function SpreadsheetTable({ data, selectedCell, onCellClick }) {
  return (
    <div className="flex-1 overflow-auto bg-white">
      <table className="w-full border-collapse">
        <TableHeader />
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Data rows */}
          {data.map((row) => (
            <TableRow 
              key={row.id}
              row={row}
              selectedCell={selectedCell}
              onCellClick={onCellClick}
            />
          ))}
          
          {/* Empty rows */}
          <EmptyRow rowNumber={6} showAvatars={true} />
          <EmptyRow rowNumber={7} />
          <EmptyRow rowNumber={8} />
        </tbody>
      </table>
    </div>
  );
}

export default SpreadsheetTable;