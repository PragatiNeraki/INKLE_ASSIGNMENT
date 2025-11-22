# Inkle Assignment - Tax Management System

A modern React application for managing tax records with a clean, intuitive user interface. This project demonstrates a full-stack frontend solution with data table management, filtering, and modal-based editing capabilities.

## 🚀 Features

- **Data Table Management**: Interactive table built with `@tanstack/react-table` displaying tax records
- **Country Filtering**: Filter table rows by country with a dropdown filter menu
- **Edit Functionality**: Modal-based editing for tax records with form validation
- **Real-time Updates**: Seamless data updates with optimistic UI updates
- **Responsive Design**: Modern, pixel-perfect UI built with TailwindCSS
- **Toast Notifications**: User-friendly notifications for successful/failed operations

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **TailwindCSS 4** - Utility-first CSS framework
- **@tanstack/react-table** - Powerful table library
- **Axios** - HTTP client for API calls
- **react-modal** - Accessible modal component
- **react-select** - Customizable select dropdown
- **react-hot-toast** - Toast notification library
- **react-icons** - Icon library

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/PragatiNeraki/INKLE_ASSIGNMENT.git
cd INKLE_ASSIGNMENT
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
inkle-assignment/
├── src/
│   ├── api/              # API service functions
│   │   ├── taxesApi.js   # Tax-related API calls
│   │   └── countriesApi.js # Country data API calls
│   ├── components/       # React components
│   │   ├── Table.jsx      # Main data table component
│   │   ├── EditModal.jsx # Edit customer modal
│   │   └── Loader.jsx    # Loading spinner
│   ├── hooks/            # Custom React hooks
│   │   ├── useTaxes.js   # Tax data management hook
│   │   └── useCountries.js # Countries data hook
│   ├── styles/           # Global styles
│   │   └── global.css
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # TailwindCSS imports
├── public/               # Static assets
├── package.json
├── vite.config.js       # Vite configuration
├── tailwind.config.js    # TailwindCSS configuration
└── postcss.config.js     # PostCSS configuration
```

## 🎯 Key Features Explained

### Data Table
- Displays tax records with columns: Entity, Gender, Request date, Country, and Action
- Gender badges with color coding (Male: red, Female: blue)
- Hover effects on table rows
- Country filter dropdown with checkbox selection
- Edit icon for each row to open edit modal

### Edit Modal
- Form validation for required fields
- Country dropdown with search functionality
- Save button disabled until changes are made
- Keyboard shortcuts (Enter to save, Escape to close)
- Smooth animations and transitions

### API Integration
- Base URL: `https://685013d7e7c42cfd17974a33.mockapi.io`
- Endpoints:
  - `GET /taxes` - Fetch all tax records
  - `PUT /taxes/:id` - Update a tax record
  - `GET /countries` - Fetch available countries

## 🚀 Deployment

### Vercel Deployment

This project is ready for Vercel deployment. Follow these steps:

1. **Push to GitHub** (if not already done):
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**:
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Build Settings** (auto-detected):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Manual Build

To build for production:
```bash
npm run build
```

The production build will be in the `dist` directory.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 UI/UX Features

- **Inter Font**: Modern, clean typography
- **Color Scheme**: Purple primary (#6F3FF5), with consistent grays
- **Responsive Design**: Works on all screen sizes
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Smooth Animations**: Fade-in modals, hover effects, transitions

## 🔒 Environment Variables

No environment variables are required for this project. The API base URL is hardcoded in the API service files.

## 🤝 Contributing

This is an assignment project. For any improvements or suggestions, please create an issue or pull request.

## 📄 License

This project is created for assignment purposes.

## 👤 Author

**Pragati Neraki**

---

Built with ❤️ using React and Vite

