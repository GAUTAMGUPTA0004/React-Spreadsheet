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
        
      </td>
    </tr>
  );
}

export default EmptyRow;