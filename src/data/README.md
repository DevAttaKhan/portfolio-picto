# Data Layer Documentation

This folder contains all the data for your portfolio website, organized in a modular structure for easy maintenance and updates.

## Structure

```
src/data/
├── index.ts          # Main export file
├── projects.ts       # Project and case study data
├── skills.ts         # Technical skills and expertise
├── experience.ts     # Work experience and achievements
├── personal.ts       # Personal information and contact details
└── README.md         # This documentation file
```

## Files Overview

### 1. `projects.ts`
Contains all your project data including:
- Project details (title, description, category)
- Technical information (technologies, duration, team size)
- Case study content (challenges, solutions, features, results)
- Links to live demos and source code
- Company and role information

**To add a new project:**
1. Add a new project object to the `projects` array
2. Include all required fields (id, title, description, etc.)
3. Create a unique slug for the URL
4. Add project images to `/public/images/`

### 2. `skills.ts`
Organizes your technical skills by category:
- Frontend (React, Next.js, TypeScript, etc.)
- Backend (Node.js, Express, NestJS, etc.)
- Database (MongoDB, PostgreSQL, MySQL)
- DevOps (AWS, Docker, Git, etc.)
- Methodology (Agile, Remote Collaboration)

**To update skills:**
1. Modify the `skills` array
2. Update skill levels (Beginner, Intermediate, Advanced, Expert)
3. Add descriptions for each skill

### 3. `experience.ts`
Contains your work history:
- Company information
- Position and duration
- Key achievements and highlights
- Technologies used
- Role descriptions

**To update experience:**
1. Add new work experiences to the array
2. Update existing entries with new achievements
3. Include measurable results and impact

### 4. `personal.ts`
Your personal information:
- Contact details
- Professional summary
- Education background
- Languages and interests
- Certifications

**To update personal info:**
1. Modify the `personalInfo` object
2. Update contact information
3. Add new certifications or achievements

### 5. `index.ts`
Main export file that makes all data easily accessible:
```typescript
import { projects, skills, experience, personalInfo } from '../data';
```

## Usage Examples

### Importing Data in Components
```typescript
import { projects, skills, experience, personalInfo } from '../data';

// Use in your component
const MyComponent = () => {
  return (
    <div>
      <h1>{personalInfo.name}</h1>
      <p>{personalInfo.summary}</p>
      
      {projects.map(project => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};
```

### Adding a New Project
```typescript
// In projects.ts
{
  id: 7,
  title: "New Project Name",
  subtitle: "Project subtitle",
  description: "Detailed project description...",
  category: "Web Application",
  tech: ["React", "Node.js", "MongoDB"],
  image: "/images/new-project-preview.jpg",
  slug: "new-project-name",
  duration: "3 months",
  team: "Solo Developer",
  challenge: "Describe the main challenge...",
  solution: "Explain your solution approach...",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  results: [
    "Result 1",
    "Result 2",
    "Result 3"
  ],
  liveUrl: "https://project-demo.com",
  githubUrl: "https://github.com/username/project",
  company: "Company Name",
  role: "Lead Developer"
}
```

## Benefits of This Structure

✅ **Easy Maintenance**: Update content without touching component code
✅ **Type Safety**: Full TypeScript support with interfaces
✅ **Scalability**: Easy to add new projects, skills, or experiences
✅ **Reusability**: Data can be used across multiple components
✅ **Organization**: Clear separation of concerns
✅ **Future-Proof**: Easy to migrate to CMS or database later

## Future Enhancements

- **CMS Integration**: Replace static data with headless CMS
- **Database**: Move to database for dynamic content management
- **API Integration**: Fetch data from external APIs
- **Content Management**: Admin panel for non-technical updates
- **Localization**: Support for multiple languages

## Best Practices

1. **Keep data current**: Regularly update projects and achievements
2. **Use consistent formatting**: Maintain consistent data structure
3. **Include measurable results**: Add specific metrics and achievements
4. **Update images**: Keep project screenshots current
5. **Validate URLs**: Ensure all links are working
6. **Backup data**: Keep copies of your data files

## Need Help?

If you need to make changes to your portfolio data:
1. Edit the appropriate file in this folder
2. Follow the existing data structure
3. Test your changes in the development environment
4. Commit and deploy your updates

This data layer makes it easy to keep your portfolio fresh and up-to-date with your latest work and achievements!
