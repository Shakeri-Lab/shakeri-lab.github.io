# Lab Website

This is the official website for our lab, built with Next.js and deployed on GitHub Pages.

## Website Structure
The website includes:
- Research Overview
- Current Projects
- Team Members
- News and Updates
- Quick Links (Software & Publications)
- Contact Information

## Content Updates Guide

### Updating News
News items are stored in `src/data/news.ts`. Add new items in this format:
```typescript
{
  date: "Month DD, YYYY",
  title: "Your News Title",
  content: "Your news content",
  links: [{
    text: "Link Text",
    url: "URL"
  }]
}
```

### Updating Team Members
Team information is stored in `src/data/team.ts`. Update members in this format:
```typescript
{
  name: "Member Name",
  title: "Member Title",
  link: "Profile URL"
}
```

## Development Setup

### On Mac
1. Install brew:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. After installation, follow the "Next steps" instructions shown in terminal to add Homebrew to your PATH. It usually involves running something like:
```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
source ~/.zshrc
```

3. Verify installation:
```bash
brew --version
```

### Prerequisites
- Node.js (v18 or higher)
  - Mac: `brew install node`
- npm (comes with Node.js)
  - Mac: Automatically installed with node
- Git
  - Mac: `brew install git`

### Initial Setup
1. Clone the repository:
```bash
git clone git@github.com:Shakeri-Lab/shakeri-lab.github.io.git
cd shakeri-lab.github.io
```

2. Install dependencies:
```bash
# Remove existing dependencies (if any)
rm -rf node_modules
rm package-lock.json

# Install fresh dependencies
npm install
```

3. Run the development server:
```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## Making Updates

### First-Time Setup on a New Machine
1. Generate SSH key:
```bash
ssh-keygen -t rsa -b 4096 -C "your@email.edu"
```

2. Copy the public key:
```bash
cat ~/.ssh/id_rsa.pub
```

3. Add this key to GitHub:
   - Go to GitHub → Settings → SSH and GPG keys
   - Click "New SSH key"
   - Paste your key and save

4. Configure Git:
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.edu"
```

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
git push -u origin main
```

The site will automatically deploy through GitHub Actions. You can monitor the deployment status in the "Actions" tab of the repository.

## Troubleshooting

### Dependency Issues
If you encounter dependency conflicts, try:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Deployment Issues
- Check the GitHub Actions tab for build errors
- Ensure all dependencies are properly installed
- Verify that the content in next.config.js is correct
- Make sure your SSH key is properly set up for GitHub

## Project Structure
```
lab-website/
├── src/
│   ├── components/  # Reusable React components
│   ├── pages/       # Next.js pages
│   ├── data/        # Data files (news, team info)
│   └── types/       # TypeScript type definitions
├── public/          # Static assets (images, etc.)
└── ...
```

## Contact
For questions or issues, please contact the lab directly or open an issue on GitHub.

## Configuration Files
Key configuration files:
- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS styling
- `.github/workflows/deploy.yml` - Deployment configuration

## Development Guidelines
- Keep commits focused and descriptive
- Test all changes locally before pushing
- Follow the existing code style and formatting
- Add comments for complex logic
- Update README when adding new features

## Common Tasks

### Adding a News Item
1. Open `src/data/news.ts`
2. Add your news entry at the top of the array
3. Follow the existing format
4. Test locally
5. Commit and push

### Updating Team Information
1. Open `src/data/team.ts`
2. Modify the relevant section (PI, currentMembers, or alumni)
3. Test locally
4. Commit and push

### Installing dependencies
npm install        # legacy flag no longer needed

### UI Links Row
Email • Address • Deep-Learning Course • Google Scholar • GitHub • Dark-mode toggle

### Dark-mode toggle
The site uses Tailwind's `dark` class. Click the sun/moon icon to switch; preference is stored in `localStorage`.

### New assets
public/dynamo-lab-logo.png  (main logo for both themes)

### GitHub Actions
- upload-pages-artifact@v2
- deploy-pages@v2
