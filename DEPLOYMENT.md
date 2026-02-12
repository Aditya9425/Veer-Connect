# Deployment Guide for Veer Connect

## Vercel Deployment

This project is configured to be easily deployed on Vercel.

### Prerequisites
- A Vercel account
- GitHub, GitLab, or Bitbucket repository (recommended) or Vercel CLI

### Steps to Deploy

1.  **Push to Git**: Commit your changes and push the code to a Git repository.
2.  **Import Project**:
    - Go to your Vercel Dashboard.
    - Click "Add New..." -> "Project".
    - Select your repository.
3.  **Configure Project**:
    - **Framework Preset**: Vercel should automatically detect **Vite**.
    - **Root Directory**: `./` (default)
    - **Build Command**: `vite build` (or `npm run build`)
    - **Output Directory**: `dist`
    - **Environment Variables**: None required for this contract.
4.  **Deploy**: Click "Deploy".

### Configuration Files
- **`vercel.json`**: This file has been added to the root directory to handle Client-Side Routing (SPA). It redirects all requests to `index.html` so React Router can handle navigation.
- **`.gitignore`**: Updated to exclude build artifacts and unnecessary files.

## Local Production Build

To test the production build locally:

1.  Run `npm run build`
2.  Run `npm run preview`
3.  Open the localhost URL provided.
