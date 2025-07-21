# 🚀 Deployment Guide

## GitHub Actions Workflow

The project includes automated GitHub Actions workflows for:
1. **Continuous Integration** - Build, test, and deploy Docker images
2. **Release Management** - Create versioned releases with semantic versioning

### Setup Instructions

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "feat: initial TTN website with Docker deployment"
   git push origin main
   ```

2. **Enable GitHub Packages:**
   - Go to repository Settings → Actions → General
   - Ensure "Read and write permissions" are enabled for GITHUB_TOKEN

3. **First Deployment:**
   - Push to `main` branch triggers automatic build
   - Docker image will be available at: `ghcr.io/[username]/ttn-web:latest`

## Creating Releases

### Method 1: GitHub Actions (Recommended)
1. Go to **Actions** tab in GitHub
2. Select **"Create Release"** workflow
3. Click **"Run workflow"**
4. Enter version (e.g., `v1.0.0`) and release notes
5. Workflow automatically:
   - Updates package.json version
   - Creates git tag
   - Builds multi-platform Docker image
   - Pushes to GitHub Container Registry
   - Creates GitHub release

### Method 2: Manual Git Tags
```bash
# Create and push version tag
git tag v0.0.1
git push origin v0.0.1

# This triggers the build workflow automatically
```

## Docker Image Tags

The workflow creates multiple tags for flexibility:

| Tag | Purpose | Example |
|-----|---------|---------|
| `latest` | Latest main branch | `ghcr.io/user/ttn-web:latest` |
| `v0.0.1` | Specific version | `ghcr.io/user/ttn-web:v0.0.1` |
| `v0.0` | Minor version | `ghcr.io/user/ttn-web:v0.0` |
| `v0` | Major version | `ghcr.io/user/ttn-web:v0` |
| `main` | Main branch builds | `ghcr.io/user/ttn-web:main` |

## Running the Application

### Local Development
```bash
npm install
npm run dev
# Visit http://localhost:5173
```

### Docker (Production)
```bash
# Pull and run latest version
docker pull ghcr.io/[username]/ttn-web:latest
docker run -p 8080:80 ghcr.io/[username]/ttn-web:latest

# Or run specific version
docker run -p 8080:80 ghcr.io/[username]/ttn-web:v0.0.1
```

### Docker Compose (Recommended)
Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  ttn-web:
    image: ghcr.io/[username]/ttn-web:latest
    ports:
      - "80:80"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/health"]
      interval: 30s
      timeout: 10s
      retries: 3
```

Run with:
```bash
docker-compose up -d
```

## Image Architecture

The Docker images support multiple architectures:
- `linux/amd64` - Intel/AMD 64-bit
- `linux/arm64` - ARM 64-bit (Apple Silicon, ARM servers)

## Environment Variables

The application doesn't require environment variables by default, but you can customize:

```bash
# Example with custom port mapping
docker run -p 3000:80 ghcr.io/[username]/ttn-web:latest
```

## Health Checks

The Docker container includes health checks:
- **Endpoint:** `http://localhost/health`
- **Interval:** 30 seconds
- **Timeout:** 3 seconds
- **Retries:** 3

## Monitoring

Monitor your deployment:
```bash
# Check container status
docker ps

# View logs
docker logs <container-id>

# Health check
curl http://localhost:8080/health
```

## Troubleshooting

### Build Failures
1. Check GitHub Actions logs in the Actions tab
2. Ensure GITHUB_TOKEN has proper permissions
3. Verify Dockerfile syntax

### Runtime Issues
1. Check container logs: `docker logs <container>`
2. Verify port mapping: `-p 8080:80`
3. Test health endpoint: `curl http://localhost:8080/health`

### Version Conflicts
1. Ensure version follows semver: `v1.2.3`
2. Check if tag already exists
3. Use unique version numbers

## Security Considerations

- Images are built with multi-stage builds for minimal size
- Nginx serves static files with security headers
- No sensitive data in the container
- Health checks ensure availability
- Regular base image updates via dependabot

## Performance

- **Gzip compression** enabled
- **Static asset caching** (1 year)
- **Multi-platform builds** for optimal performance
- **Minimal Alpine-based** images
- **Layer caching** in GitHub Actions

## Next Steps

1. Configure custom domain
2. Set up SSL/TLS certificates
3. Configure monitoring/logging
4. Set up staging environment
5. Add database if needed