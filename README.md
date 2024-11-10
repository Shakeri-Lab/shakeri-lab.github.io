# DYNAMO Lab Website

This repository contains the source code for the DYNAMO Lab website at the School of Data Science, University of Virginia.

## How to Update Content

### Team Members
To update team members, edit `src/data/team.ts`:

```typescript
export const team = {
  pi: {
    name: "Name",
    title: "Title",
    link: "URL to profile"
  },
  currentMembers: [
    {
      name: "Name",
      title: "Position",
      link: "URL to profile"
    },
    // Add more members here
  ],
  alumni: [
    {
      name: "Name",
      title: "Current Position",
      link: "URL to profile"
    },
    // Add more alumni here
  ]
};
News Items
To add news items, edit src/data/news.ts. News items are automatically sorted by date:
typescriptCopyexport const news = [
  {
    date: "Month YYYY",
    title: "News Title",
    content: "News content",
    links: [{
      text: "Link Text",
      url: "URL"
    }]
  },
  // Add more news items here
];
Projects
To add or update projects, edit the Projects section in src/pages/index.tsx. Find the "Current Projects" section and add your project:
tsxCopy<div>
  <h3 className="font-semibold mb-2 text-zinc-700">Project Title</h3>
  <p className="text-sm">
    Project description with <strong>highlighted terms</strong>.
  </p>
  {/* Add links if needed */}
  <Link 
    href="external-url"
    className="text-sm text-primary hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    Link Text →
  </Link>
</div>
External Links
Add external links to projects or content using Next.js Link component:
tsxCopy<Link 
  href="https://external-url.com"
  className="text-sm text-primary hover:underline"
  target="_blank"
  rel="noopener noreferrer"
>
  Link Text →
</Link>
Development

Run the development server:

bashCopynpm run dev

Open http://localhost:3000 to see your changes
Build for production:

bashCopynpm run build
Deployment
The website is automatically deployed to GitHub Pages when changes are pushed to the main branch.
Local Setup
bashCopy# Clone the repository
git clone git@github.com:Shakeri-Lab/shakeri-lab.github.io.git

# Install dependencies
npm install

# Run development server
npm run dev
Contact
For website maintenance questions, contact:

Heman Shakeri