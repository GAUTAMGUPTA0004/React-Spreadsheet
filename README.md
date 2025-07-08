# Spreadsheet App

A modern React-based spreadsheet application built with Vite, featuring a clean UI similar to popular spreadsheet tools like Airtable or Notion databases.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone or navigate to the project directory
cd my-spreadsheet-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.jsx       # Top navigation with search and user info
│   ├── Toolbar.jsx      # Action buttons and tools
│   ├── TabNavigation.jsx # Sheet tabs navigation
│   ├── SpreadsheetTable.jsx # Main table container
│   ├── TableHeader.jsx  # Column headers with icons
│   ├── TableRow.jsx     # Individual data rows
│   ├── TableCell.jsx    # Individual cells with type handling
│   ├── EmptyRow.jsx     # Empty rows for padding
│   └── UserAvatar.jsx   # User profile avatars
├── data/
│   └── spreadsheetData.js # Sample data structure
├── App.jsx              # Main application component
├── main.jsx            # Application entry point
└── index.css           # Tailwind CSS imports
```

## 🎨 Features

- **Interactive Table**: Click-to-select cells with visual feedback
- **Multiple Data Types**: Status badges, priority indicators, URLs, and values
- **Tab Navigation**: Multi-sheet support with color-coded tabs
- **Responsive Design**: Works across different screen sizes
- **Modern UI**: Clean, professional interface with hover effects
- **User Management**: Avatar system with automatic color assignment

## 🔧 Technology Stack

- **React 19** - Latest React with modern hooks
- **Vite 7** - Fast build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **ESLint** - Code linting and formatting

## 🎯 Key Trade-offs & Design Decisions

### 1. **Component Architecture**
- **Choice**: Highly modular component structure
- **Trade-off**: More files to manage vs. better maintainability and reusability
- **Rationale**: Easier to test, debug, and extend individual features

### 2. **State Management**
- **Choice**: React's built-in useState for local state
- **Trade-off**: Simple but limited scalability vs. external state management
- **Rationale**: Current complexity doesn't justify Redux/Zustand overhead

### 3. **Data Structure**
- **Choice**: Static JavaScript array for demo data
- **Trade-off**: No persistence vs. simple implementation
- **Rationale**: Focus on UI/UX rather than backend complexity

### 4. **Styling Approach**
- **Choice**: Tailwind CSS utility classes
- **Trade-off**: Verbose HTML vs. rapid development and consistency
- **Rationale**: Faster prototyping and built-in design system

### 5. **Cell Type System**
- **Choice**: Type-based rendering in TableCell component
- **Trade-off**: Switch statement complexity vs. flexibility
- **Rationale**: Easy to extend with new cell types while maintaining consistency

### 6. **Event Handling**
- **Choice**: Props drilling for event handlers
- **Trade-off**: Prop passing overhead vs. simple data flow
- **Rationale**: Clear parent-child communication without context complexity

### 7. **Icons & UI Elements**
- **Choice**: Lucide React for icons
- **Trade-off**: Bundle size vs. consistent icon design
- **Rationale**: Modern, well-maintained icon library with good tree-shaking

### 8. **Responsive Design**
- **Choice**: Desktop-first approach
- **Trade-off**: Mobile experience vs. spreadsheet functionality
- **Rationale**: Spreadsheets are primarily desktop tools

## 🚧 Current Limitations

1. **No Data Persistence**: Changes don't save between sessions
2. **Limited Editing**: Cells are clickable but not editable
3. **No Sorting/Filtering**: UI exists but functionality not implemented
4. **No Real-time Collaboration**: Single-user experience
5. **Fixed Column Structure**: Headers and types are hardcoded

## 🔮 Future Enhancements

- **Cell Editing**: In-place editing with different input types
- **Data Persistence**: localStorage or backend integration
- **Sorting & Filtering**: Functional table operations
- **Drag & Drop**: Row reordering and column management
- **Export/Import**: CSV/Excel file support
- **Real-time Updates**: WebSocket integration for collaboration
- **Mobile Optimization**: Touch-friendly interface

## 🛠️ Development Notes

### Adding New Cell Types
1. Add type case in `TableCell.jsx`
2. Update data structure in `spreadsheetData.js`
3. Add corresponding header icon in `TableHeader.jsx`

### Styling Customization
- Modify Tailwind classes in components
- Update `tailwind.config.js` for theme changes
- Add custom CSS in `index.css` if needed

### Performance Considerations
- Uses React.memo for component optimization (can be added)
- Implement virtual scrolling for large datasets
- Consider pagination for 1000+ rows

## 📝 License

This project is open source and available under the MIT License.
