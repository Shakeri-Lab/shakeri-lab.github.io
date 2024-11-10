# Lab Website

This is the official website for our lab, built with Next.js and deployed on GitHub Pages.

## Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)
- Git

### Initial Setup
1. Clone the repository:
```bash
git clone [repository-url]
cd lab-website
```

2. Install dependencies:
```bash
# Remove existing dependencies (if any)
rm -rf node_modules
rm package-lock.json

# Install fresh dependencies
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## Making Updates

### Getting Latest Changes
Before making any changes, always pull the latest version:
```bash
git pull origin main
```

### Making and Testing Changes
1. Make your changes to the website
2. Test locally using:
```bash
npm run dev
```

### Deploying Changes
1. Stage your changes:
```bash
git add .
```

2. Commit your changes:
```bash
git commit -m "Description of your changes"
```

3. Push to GitHub:
```bash
git push
```

The site will automatically deploy through GitHub Actions. You can monitor the deployment status in the "Actions" tab of the repository.

## Troubleshooting

### Dependency Issues
If you encounter dependency conflicts, try:
```bash
rm -rf node_modules
rm package-lock.json
npm install --legacy-peer-deps
```

### Deployment Issues
- Check the GitHub Actions tab for build errors
- Ensure all dependencies are properly installed
- Verify that the content in next.config.js is correct

## Project Structure
```
lab-website/
├── components/     # Reusable React components
├── pages/          # Next.js pages
├── public/         # Static assets
├── styles/         # CSS styles
└── ...
```

## Contact
For questions or issues, please open an issue on GitHub.