# Ancleto's Web Page

A fun, animated web page featuring Ancleto with GIFs, curtains, and looping audio. Originally a static HTML page, migrated to a modern React application with automatic deployment to GitHub Pages.

## 🌟 Features

- **Animated Curtains**: Opening curtain animation on load
- **GIF Gallery**: Collection of themed animated GIFs
- **Background Audio**: Looping soundtrack that plays on user interaction
- **Responsive Design**: Works on desktop and mobile
- **Custom Fonts**: Cooper Black typography
- **Automatic Deployment**: GitHub Actions for seamless updates to GitHub Pages

## 🚀 Live Demo

View the live site: [https://AncletoCEO.github.io/ancletos-web-page](https://AncletoCEO.github.io/ancletos-web-page)

<!-- Updated for deployment -->

## 🛠️ Tech Stack

- **Frontend**: React 19
- **Build Tool**: Create React App
- **Styling**: CSS Modules
- **Deployment**: GitHub Pages with GitHub Actions
- **Version Control**: Git

## 📁 Project Structure

```
src/
├── components/
│   ├── AudioPlayer.jsx    # Hidden audio player with autoplay on interaction
│   ├── Curtain.jsx        # Animated opening curtains
│   ├── Loader.jsx         # Initial loading screen (disabled)
│   ├── Table.jsx          # GIF collage layout
│   └── Title.jsx          # Main page title
├── assets/
│   └── fonts/             # Custom fonts
├── App.js                 # Main app component
├── index.js               # App entry point
└── index.css              # Global styles

public/
├── gifs/                  # Animated GIFs
├── sonidos/               # Audio files
├── img/                   # Images and icons
└── fonts/                 # Font files
```

## 🏗️ Migration from Static HTML

This project was migrated from a vanilla HTML/CSS/JavaScript page to a React application:

- **Original**: Static HTML with inline styles and vanilla JS
- **New**: Modular React components with CSS Modules
- **Improvements**: Better maintainability, component reusability, modern tooling

See `migration-roadmap.md` for detailed migration notes.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AncletoCEO/ancletos-web-page.git
   cd ancletos-web-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🚀 Deployment

The project uses GitHub Actions for automatic deployment to GitHub Pages:

- **Trigger**: Push to `main` branch
- **Process**: Build → Move to `docs/` → Commit back to `main`
- **Result**: GitHub Pages updates automatically

### Manual Deployment

If needed, you can deploy manually:

1. Build the project: `npm run build`
2. Move `build` to `docs`: `mv build docs`
3. Commit and push the `docs/` folder

## 🎵 Audio Note

The background audio plays automatically after user interaction (click anywhere) to comply with browser autoplay policies.

## 📝 Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Original static page design
- React and Create React App teams
- GitHub Actions for automation

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
