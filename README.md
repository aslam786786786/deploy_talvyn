# Talvyn Technologies Website

A modern, responsive corporate website built with React and Vite, showcasing innovative technology solutions in cybersecurity, web development, and custom software development.

## 🚀 Features

- **Modern React Architecture**: Built with React 18+ and Vite for optimal performance
- **Responsive Design**: Mobile-first design that works on all devices
- **Professional UI**: Clean, modern interface with smooth animations
- **Component-Based**: Modular, reusable components for easy maintenance
- **SEO Optimized**: Structured for search engine visibility
- **Accessibility**: WCAG compliant for inclusive user experience

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Build Tool**: Vite
- **Styling**: CSS3, CSS Modules
- **Animations**: Framer Motion, AOS (Animate On Scroll)
- **Icons**: Lucide React, React Icons
- **Routing**: React Router DOM
- **Code Quality**: ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── styles/             # CSS modules and stylesheets
├── assets/             # Static assets (images, icons)
│   ├── images/
│   │   ├── icons/      # Icon files
│   │   ├── photos/     # Photo assets
│   │   └── graphics/   # Graphic elements
├── constants/          # Application constants
├── utils/              # Utility functions
├── services/           # API services
├── data/              # Static data and mock data
└── lib/               # Third-party library configurations
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd Talvyn
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Copy environment variables
   ```bash
   cp .env.example .env
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Design System

### Colors
- **Primary**: #00704A (Dark Green)
- **Primary Light**: #059669 (Light Green)
- **Dark**: #1a202c
- **Gray**: #4a5568
- **Light Gray**: #e2e8f0

### Typography
- **Primary Font**: Poppins (Headings)
- **Secondary Font**: Inter (Body text)
- **Accent Font**: Ubuntu, Ubuntu Mono (Special elements)

## 🏗️ Architecture

### Component Organization
- **Pages**: Top-level route components
- **Components**: Reusable UI components
- **Hooks**: Custom React hooks for shared logic
- **Utils**: Pure utility functions
- **Services**: API integration layer
- **Constants**: Application-wide constants

### Styling Strategy
- CSS Modules for component-specific styles
- Global styles for base elements
- Responsive design with mobile-first approach
- Consistent spacing and color system

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Environment Variables
Copy `.env.example` to `.env` and configure:
- `VITE_API_BASE_URL` - Backend API URL
- `VITE_CONTACT_EMAIL` - Contact email address
- `VITE_CONTACT_PHONE` - Contact phone number

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Talvyn Technologies.

## 📞 Contact

- **Email**: Aaron@gmail.com
- **Phone**: 1234567890
- **Address**: No.546, Left cross road, CBE

## 🔧 Development Guidelines

### Code Style
- Use functional components with hooks
- Follow ESLint configuration
- Use meaningful component and function names
- Keep components small and focused
- Write self-documenting code

### File Naming
- Components: PascalCase (e.g., `Header.jsx`)
- Utilities: camelCase (e.g., `formatDate.js`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS`)
- Styles: kebab-case (e.g., `header-styles.css`)

### Commit Messages
Follow conventional commit format:
- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks