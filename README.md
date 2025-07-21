# TTN Web - Electronic Music Events Website

A modern, minimalist Vue.js website for electronic music event organizers featuring dark theme, responsive design, and interactive installations showcase.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## 🐳 Docker Deployment

### Local Docker Build & Run
```bash
# Build Docker image
npm run docker:build

# Run Docker container
npm run docker:run

# Build and run in one command
npm run docker:build-and-run
```

The application will be available at `http://localhost:8080`

### GitHub Container Registry
The project automatically builds and pushes Docker images to GitHub Container Registry when:
- Pushing to `main` branch
- Creating version tags (e.g., `v1.0.0`)

#### Available Images
- `ghcr.io/[username]/ttn-web:latest` - Latest main branch
- `ghcr.io/[username]/ttn-web:v0.0.1` - Specific version
- `ghcr.io/[username]/ttn-web:main` - Main branch builds

### Pull and Run from Registry
```bash
# Pull latest image
docker pull ghcr.io/[username]/ttn-web:latest

# Run the container
docker run -p 8080:80 ghcr.io/[username]/ttn-web:latest
```

## 📦 Versioning & Releases

### Semantic Versioning
The project uses semantic versioning (semver) with the format `v{major}.{minor}.{patch}`.

### Creating a New Release
1. **Manual Release via GitHub Actions:**
   - Go to GitHub Actions tab
   - Select "Create Release" workflow
   - Click "Run workflow"
   - Enter version (e.g., `v1.0.0`) and release notes
   - The workflow will automatically:
     - Update package.json version
     - Create git tag
     - Build and push Docker image
     - Create GitHub release

2. **Local Version Bumps:**
   ```bash
   # Patch version (0.0.1 -> 0.0.2)
   npm run version:patch
   
   # Minor version (0.1.0 -> 0.2.0)
   npm run version:minor
   
   # Major version (1.0.0 -> 2.0.0)
   npm run version:major
   ```

## 🏗️ Project Structure

```
├── src/
│   ├── components/ui/     # Reusable UI components
│   ├── views/            # Page components
│   ├── router/           # Vue Router configuration
│   └── assets/           # Static assets & styles
├── .github/workflows/    # GitHub Actions
├── Dockerfile           # Docker configuration
├── nginx.conf          # Nginx server configuration
└── package.json        # Project dependencies & scripts
```

## 🎨 Features

- **Modern Vue 3** with TypeScript and Composition API
- **Tailwind CSS** for styling with custom dark theme
- **shadcn-vue** components for consistent UI
- **Responsive Design** for desktop and mobile
- **Docker Ready** with multi-stage builds
- **GitHub Actions** for CI/CD
- **Semantic Versioning** with automated releases

## 📋 Pages

1. **Landing Page** (`/`) - Hero section with company branding
2. **Installations** (`/installationen`) - Showcase of art installations
3. **Contact** (`/kontakt`) - Contact form and company information

## 🛠️ Development

### Prerequisites
- Node.js 20+
- Docker (optional, for containerization)

### Code Quality
- **ESLint** - Code linting with Vue/TypeScript rules
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Vue TSC** - Vue template type checking

### Build Process
The application uses Vite for fast development and optimized production builds with:
- Code splitting
- Asset optimization
- Modern JavaScript output
- CSS preprocessing

## 🚀 Deployment Options

### 1. Docker (Recommended)
```bash
docker run -p 80:80 ghcr.io/[username]/ttn-web:latest
```

### 2. Static Hosting
Build the project and serve the `dist/` folder:
```bash
npm run build
# Serve contents of dist/ folder
```

### 3. Nginx
Use the included `nginx.conf` for optimal configuration with:
- Gzip compression
- Cache headers
- SPA routing support
- Security headers

## 📝 License

This project is private and proprietary to TTN Events.

## 🤝 Contributing

1. Create feature branch from `main`
2. Make changes and ensure tests pass
3. Run linting: `npm run lint`
4. Create pull request
5. After merge, create release using GitHub Actions workflow