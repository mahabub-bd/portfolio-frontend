# Dokploy Deployment Guide

## Quick Deployment

### Option 1: Using Dokploy UI (Recommended)

1. **Login to Dokploy Dashboard**
   - Access your Dokploy instance at `http://your-vps-ip:3000`

2. **Create New Application**
   - Click "Create Application"
   - Application Name: `portfolio`

3. **Configure Build Settings**
   - **Build Type**: Dockerfile
   - **Dockerfile Path**: `Dockerfile`
   - **Docker Context**: `/` (root of project)
   - **Build Stage**: `runner` (final production stage)

4. **Environment Variables**
   ```
   NODE_ENV=production
   NEXT_TELEMETRY_DISABLED=1
   ```

5. **Port Configuration**
   - **Container Port**: `3000`
   - **Host Port**: `5000`

6. **Domains (Optional)**
   - Add your domain (e.g., `mahabub.me`)
   - Enable HTTPS with Let's Encrypt

7. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~3-5 minutes)

---

### Option 2: Using Docker Compose

1. **Upload files to VPS**
   ```bash
   scp -r ./portfolio user@your-vps-ip:/opt/
   ```

2. **SSH into VPS**
   ```bash
   ssh user@your-vps-ip
   cd /opt/portfolio
   ```

3. **Build and Start**
   ```bash
   docker build -t portfolio-app:latest .
   docker-compose -f dokploy-compose.yml up -d
   ```

---

## Configuration Details

### Docker Build Stages

- **`base`**: Node.js 22 Alpine foundation
- **`deps`**: Install dependencies with pnpm
- **`builder`**: Build Next.js application
- **`runner`**: Production image (use this stage)

### Paths

| Setting | Value |
|---------|-------|
| Dockerfile Path | `Dockerfile` |
| Docker Context | `.` (project root) |
| Build Stage | `runner` |
| Working Directory | `/app` |

### Ports

| Type | Port |
|------|------|
| Container Internal | `3000` |
| Host External | `5000` |

### Environment Variables

```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

---

## Health Check

The application includes a built-in health check:
- **Endpoint**: `http://localhost:3000`
- **Interval**: 30 seconds
- **Timeout**: 10 seconds
- **Retries**: 3

---

## Troubleshooting

### View Logs
```bash
docker logs -f portfolio-app
```

### Restart Container
```bash
docker restart portfolio-app
```

### Rebuild
```bash
docker-compose -f dokploy-compose.yml up -d --build
```

---

## Post-Deployment Checklist

- [ ] Add `resume.pdf` to `public/` folder
- [ ] Update social media links
- [ ] Configure custom domain
- [ ] Enable HTTPS
- [ ] Test all navigation links
- [ ] Verify contact form
- [ ] Check mobile responsiveness

---

## URL After Deployment

- **Direct**: `http://your-vps-ip:5000`
- **With Domain**: `https://your-domain.com`
