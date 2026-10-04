# TxBot Chatbot UI - Deployment Guidelines

A comprehensive guide for deploying the TxBot chatbot UI across different environments.

## Table of Contents

1. [Local Development](#local-development)
2. [TX Platform Agent Deployment](#tx-platform-agent-deployment)
3. [Self-Hosted](#self-hosted)
4. [Cloud Deployment](#cloud-deployment)
5. [Docker Containerization](#docker-containerization)
6. [CI/CD Pipeline](#cicd-pipeline)
7. [Production Checklist](#production-checklist)

---

## Local Development

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Node.js 18+ and npm
- Text editor (VS Code, Sublime, etc.)

### Setup Steps

1. **Clone the repository:**
```bash
git clone https://github.com/KENWELL-TX-ORG/Team---Name-file-C-Users-VST-Downloads-kenwell-publisher.htm.git
cd Team---Name-file-C-Users-VST-Downloads-kenwell-publisher.htm/chatbot.ui
```

2. **Install dependencies and start the Vite development server:**
```bash
npm install
PORT=8000 npm run dev
```

In Windows PowerShell:
```powershell
npm install
$env:PORT = "8000"
npm run dev
```

3. **Open the local site:**
```text
http://localhost:8000
```

Build and preview the production files on one machine:
```bash
npm run build
PORT=4173 npm run preview
```

Portable build aliases are available on Windows, Linux, and macOS:
```bash
npm run build:production
npm run build:ci
```

`build:ci` performs `npm ci` followed by a production build.

In PowerShell, set `$env:PORT = "4173"` before `npm run preview`. The demo answers locally and does not require a backend.

### TX Platform Agent Deployment

Use this path to publish a TradeX platform agent. It is separate from deploying the static Vite UI.

The project should contain the platform agent definition and resource lock:

```text
agents/
  tradexpress-app.md
tx-lock.json
```

The YAML frontmatter in `agents/tradexpress-app.md` contains agent metadata and its Markdown body provides the instructions. Follow the platform CLI schema for the required fields. Keep `tx-lock.json` with the agent files to track platform resource IDs.

Install and authenticate the `agent` and `tradexpress` CLIs using the [TX Platform CLI Quickstart](https://platform.tradexpress.co/docs/en/cli-sdks-libraries/cli/Quickstart/Preview). Connect `tradexpress-hscode-knowledge-base` through the platform's supported agent configuration; do not place API keys in the Markdown definition.

From the platform project root, preview and publish using the configured CLI:

```sh
agent apply --dry-run .
tradexpress inspect
tx run build
tradexpress push -main
tx live
```

Check `tradexpress push --help` for the exact flag syntax before publishing. The platform agent commands do not replace `npm run build`; build the browser UI separately. The supplied API reference is [api.tradexpress.co](https://api.tradexpress.co/#network). This static Vite app does not currently call that API directly.

### Vercel Deployment

From the repository root:
```powershell
cd chatbot.ui
npm install
npm run build
npx vercel --prod
```

Set the Vercel project root to `chatbot.ui`, framework preset to Vite, build command to `npm run build`, and output directory to `dist`. Add `vst.tradexpress.co` under the Vercel project's **Domains** settings and create the DNS record Vercel specifies. Static Vercel deployments do not need a runtime `PORT` setting. Use `curl.exe -I https://vst.tradexpress.co` in PowerShell to check the deployed site.

---

## Self-Hosted

### Requirements
- Web server (Apache, Nginx, or similar)
- Static file serving capability
- HTTPS certificate (recommended)

### Apache Configuration

Create `.htaccess` file in `chatbot.ui/` directory:
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /chatbot.ui/
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ index.html [L]
</IfModule>

# Enable CORS if needed
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
</IfModule>
```

### Nginx Configuration

Add to your nginx config:
```nginx
server {
    listen 80;
  server_name vst.tradexpress.co;
    
    # Redirect HTTP to HTTPS
  return 301 https://vst.tradexpress.co$request_uri;
}

server {
    listen 443 ssl http2;
  server_name vst.tradexpress.co;
    
  ssl_certificate /etc/letsencrypt/live/vst.tradexpress.co/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/vst.tradexpress.co/privkey.pem;
    
    root /var/www/txbot/chatbot.ui;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    
    # Disable caching for index.html
    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
}
```

### Deployment Steps

1. **Copy files to server:**
```bash
scp -r chatbot.ui/* user@server:/var/www/txbot/chatbot.ui/
```

2. **Set permissions:**
```bash
chmod 755 /var/www/txbot/chatbot.ui
chmod 644 /var/www/txbot/chatbot.ui/*
```

3. **Verify SSL:**
```bash
curl -I https://vst.tradexpress.co
```

The public URL uses HTTPS port 443 by default. Configure DNS for `vst.tradexpress.co` to point to this server and install a valid certificate before enabling the HTTPS Nginx server block.

---

## Cloud Deployment

### Vercel

Follow the Vercel deployment steps above. No backend environment variables are required for the static demo.

### GitHub Pages

1. **Enable in repository settings:**
   - Go to Settings → Pages
   - Select `main` branch, `/chatbot.ui` folder
   - Save

2. **Access at:**
```
https://KENWELL-TX-ORG.github.io/Team---Name-file-C-Users-VST-Downloads-kenwell-publisher.htm/chatbot.ui/
```

### Netlify

1. **Connect repository:**
   - Sign in to Netlify
   - Click "New site from Git"
   - Select your repository
   - Set build folder to `chatbot.ui`

2. **Deploy:**
   - Netlify auto-deploys on push to main branch

### AWS S3 + CloudFront

1. **Create S3 bucket:**
```bash
aws s3 mb s3://txbot-chatbot-ui
```

2. **Upload files:**
```bash
aws s3 sync . s3://txbot-chatbot-ui --exclude ".git/*"
```

3. **Create CloudFront distribution:**
   - Set origin to S3 bucket
   - Enable HTTPS
   - Set default root object to `index.html`

4. **Access via CloudFront URL**

---

## Docker Containerization

### Dockerfile

Create `Dockerfile` in the root directory:

```dockerfile
FROM nginx:alpine

# Copy chatbot files
COPY chatbot.ui/ /usr/share/nginx/html/

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1
```

### nginx.conf

```nginx
server {
    listen 80;
    
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache control
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 30d;
    }
    
    location = /index.html {
        add_header Cache-Control "no-cache, must-revalidate";
    }
}
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  chatbot-ui:
    build: .
    ports:
      - "${PORT:-8000}:80"
    environment:
      - API_URL=http://backend:5000
    depends_on:
      - backend
    restart: unless-stopped

  backend:
    build: ../
    ports:
      - "5000:5000"
    environment:
      - FLASK_APP=Kenwell.py
    restart: unless-stopped
```

### Build and Run

```bash
# Build image
docker build -t txbot-chatbot-ui .

# Run container
docker run -p "${PORT:-8000}:80" txbot-chatbot-ui

# Or use Docker Compose
PORT="${PORT:-8000}" docker compose up -d
```

The `PORT` value selects the host-side port; Nginx continues listening on port 80 inside the container. Set `PORT` to the port assigned by your environment, or omit it to use 8000.

---

## CI/CD Pipeline

GitHub Actions deploys the Vite app to Vercel through `.github/workflows/deploy-chatbot.yml` on pushes to `main`.

1. Link the app to its Vercel project from `chatbot.ui`:
```powershell
npx vercel link
```

2. Add these repository secrets under GitHub **Settings → Secrets and variables → Actions**:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Get the organization and project IDs from `chatbot.ui/.vercel/project.json` after linking. Do not commit `.vercel` or expose the token.

3. Add the repository variable `VERCEL_DEPLOY_ENABLED` with value `true` to enable the production deploy job. Without it, pushes still run the Ubuntu, Windows, and macOS build checks but skip deployment.

4. The workflow installs from `chatbot.ui/package-lock.json`, builds the app, and deploys the prebuilt output.

---

## Production Checklist

Before deploying to production:

### Security
- [ ] Enable HTTPS/SSL
- [ ] Set CORS headers properly
- [ ] Validate all user inputs
- [ ] Sanitize API responses
- [ ] Use Content Security Policy (CSP) headers
- [ ] Keep dependencies updated

### Performance
- [ ] Minimize CSS/JavaScript files
- [ ] Enable gzip compression
- [ ] Set cache headers appropriately
- [ ] Use CDN for static assets
- [ ] Monitor page load times

### Monitoring
- [ ] Set up error logging (Sentry, LogRocket)
- [ ] Monitor API availability
- [ ] Track user interactions
- [ ] Set up alerts for failures
- [ ] Monitor resource usage

### Compliance
- [ ] Review privacy policy
- [ ] Ensure GDPR compliance
- [ ] Document data handling
- [ ] Add terms of service
- [ ] Implement cookie consent

### Backup & Recovery
- [ ] Backup configuration files
- [ ] Document deployment process
- [ ] Create rollback procedure
- [ ] Test disaster recovery
- [ ] Maintain version history

---

## Troubleshooting Deployment

### Issue: CORS Errors
**Solution:** Configure backend to send proper CORS headers:
```python
from flask_cors import CORS
CORS(app)
```

### Issue: 404 on Page Reload
**Solution:** Configure server to serve `index.html` for all routes.

### Issue: Slow Loading
**Solution:**
- Enable compression: `gzip on;`
- Minify assets
- Use CDN
- Enable browser caching

### Issue: SSL Certificate Errors
**Solution:** Use Let's Encrypt for free certificates:
```bash
certbot certonly --webroot -w /var/www/txbot/chatbot.ui -d yourdomain.com
```

---

## Performance Optimization

### Image Optimization
```bash
# Convert images to WebP
cwebp input.png -o output.webp

# Compress images
imagemin chatbot.ui/images/* --out-dir=chatbot.ui/images
```

### Asset Bundling
```bash
# Minify JavaScript
uglifyjs script.js -c -m -o script.min.js

# Minify CSS
cleancss styles.css -o styles.min.css
```

### HTTP/2 Server Push
```nginx
location = /index.html {
    add_header Link "</styles.css>; rel=preload; as=style" always;
    add_header Link "</script.js>; rel=preload; as=script" always;
}
```

---

## Monitoring & Logging

### Application Monitoring
- Datadog
- New Relic
- SignalFx

### Error Tracking
- Sentry
- Rollbar
- Airbrake

### Analytics
- Google Analytics
- Mixpanel
- Amplitude

---

## Support & Documentation

- 📖 Main README: [chatbot.ui/README.md](README.md)
- 🐛 Issue Tracker: [GitHub Issues](../../issues)
- 💬 Discussions: [GitHub Discussions](../../discussions)

---

**TxBot Chatbot UI** - Ready for Production Deployment 🚀

Powered by KENWELL-TX-ORG | MIT License
