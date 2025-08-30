# Optima Shop - Premium US E-commerce Platform

A Next.js-based e-commerce platform targeting the US market with fast shipping and AI-powered features.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel
- **Domain**: one.optima.shop

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push this code to a GitHub repository
2. Visit [vercel.com](https://vercel.com)
3. Sign in and click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to Vercel
vercel

# Follow the prompts to link to your Vercel account
```

## Domain Configuration (one.optima.shop)

After deployment, configure your custom domain:

### In Vercel Dashboard:

1. Go to your project settings
2. Navigate to "Domains" section
3. Add `one.optima.shop` as a custom domain
4. You'll see DNS records to configure

### DNS Configuration:

Add these records to your domain registrar:

**For Apex Domain (one.optima.shop):**
- Type: A
- Name: @
- Value: 76.76.21.21

**Alternative CNAME (if your registrar supports CNAME flattening):**
- Type: CNAME
- Name: @
- Value: cname.vercel-dns.com

### SSL Certificate

Vercel automatically provisions SSL certificates for your domain once DNS is configured correctly.

## Project Structure

```
one-shop/
├── src/
│   └── app/
│       ├── layout.tsx    # Root layout
│       ├── page.tsx       # Homepage
│       └── globals.css    # Global styles
├── public/                # Static assets
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── vercel.json           # Vercel configuration
```

## Next Steps

1. Push code to GitHub
2. Deploy to Vercel
3. Configure domain DNS
4. Verify SSL certificate
5. Start building features!

## Support

For deployment issues, check [Vercel Docs](https://vercel.com/docs)