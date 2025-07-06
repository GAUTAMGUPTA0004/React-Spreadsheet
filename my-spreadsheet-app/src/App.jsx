import React, { useState } from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import TabNavigation from './components/TabNavigation';
import SpreadsheetTable from './components/SpreadsheetTable';
import { spreadsheetData } from './data/spreadsheetData';

function App() {
  // State to keep track of which cell is selected
  const [selectedCell, setSelectedCell] = useState(null);
  
  // State to keep track of which tab is active
  const [activeTab, setActiveTab] = useState('Q3 Financial Overview');
  
  // Function to handle when user clicks on a cell
  const handleCellClick = (rowId, columnName) => {
    const cellId = rowId + '-' + columnName;
    setSelectedCell(cellId);
    console.log('Cell clicked:', cellId);
  };
  
  // Function to handle tab clicks
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    console.log('Tab clicked:', tabName);
  };
  
  // Function to handle button clicks
  const handleButtonClick = (buttonName) => {
    console.log('Button clicked:', buttonName);
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <Header />
      <Toolbar onButtonClick={handleButtonClick} />
      <TabNavigation 
        activeTab={activeTab} 
        onTabClick={handleTabClick} 
        onButtonClick={handleButtonClick} 
      />
      <SpreadsheetTable 
        data={spreadsheetData}
        selectedCell={selectedCell}
        onCellClick={handleCellClick}
      />
    </div>
  );
}

export default App;
