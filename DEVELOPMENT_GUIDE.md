# Development Guide and Troubleshooting

## Project Structure

```
src/
├── components/     # Reusable components
├── layouts/        # Page layouts
├── pages/         # Route pages
├── api/           # API endpoints
└── types/         # TypeScript definitions
```

## Common Issues and Solutions

### 1. Broken Links

If you encounter broken links:

1. Check that the path in the `href` attribute matches the file structure in `src/pages/`
2. Verify that image paths use the correct `PUBLIC_BASE_PATH` environment variable
3. For dynamic routes, ensure the parameters are correctly passed

### 2. Media Content Not Loading

If images, music, or videos aren't loading:

1. Verify files exist in the correct public directory
2. Check file permissions
3. Ensure file names match exactly (case-sensitive)
4. Verify the correct usage of `PUBLIC_BASE_PATH`

### 3. Style Issues

If styles are not applying correctly:

1. Check if Tailwind classes are purged correctly
2. Verify CSS module imports
3. Check for conflicting styles in global.css
4. Ensure proper nesting of styled components

### 4. Component Problems

If components are not rendering:

1. Verify all required props are being passed
2. Check for proper import statements
3. Ensure components are properly exported
4. Verify the component file extension (.astro, .tsx, etc.)

### 5. API Endpoints

If API endpoints are not working:

1. Check the API route matches the file structure
2. Verify proper error handling
3. Check environment variables
4. Ensure correct HTTP methods are being used

## Development Environment Setup

### Prerequisites

- Node.js (latest LTS version)
- pnpm/npm/yarn
- VS Code with recommended extensions

### Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Start development server:

```bash
pnpm dev
```

3. Build for production:

```bash
pnpm build
```

### Environment Variables

Create a `.env` file with:

```
PUBLIC_BASE_PATH=/
```

## Performance Optimization

### Images

1. Use appropriate image formats
2. Implement lazy loading
3. Use responsive images
4. Optimize image sizes

### Music Files

1. Use appropriate audio formats
2. Implement proper preloading strategies
3. Consider using streaming for large files

### Videos

1. Use compressed formats
2. Implement lazy loading
3. Consider using external hosting for large files

## Maintenance Checklist

### Regular Checks

- [ ] Test all navigation links
- [ ] Verify media content loading
- [ ] Check responsive design on different devices
- [ ] Validate form submissions
- [ ] Test audio/video playback
- [ ] Check API endpoints
- [ ] Verify analytics integration

### Performance Checks

- [ ] Run Lighthouse audits
- [ ] Check page load times
- [ ] Verify image optimization
- [ ] Test on different browsers
- [ ] Check mobile performance

## Deployment

### Pre-deployment Checklist

1. Run build process
2. Check for console errors
3. Verify all environment variables
4. Test on staging environment
5. Validate all media content

### Post-deployment Checks

1. Verify SSL certificate
2. Test all major user flows
3. Check analytics integration
4. Verify SEO meta tags
5. Test social media sharing

## Emergency Contacts

If you encounter critical issues:

1. Check the project's GitHub issues
2. Contact the technical lead
3. Review the deployment logs

## Best Practices

### Code

- Follow consistent naming conventions
- Use TypeScript for type safety
- Implement proper error handling
- Write meaningful comments

### Assets

- Optimize all media files
- Use appropriate file formats
- Implement proper loading strategies
- Maintain organized folder structure

### Security

- Implement proper CORS policies
- Use environment variables for sensitive data
- Regular dependency updates
- Input validation

## Useful Commands

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build

# Maintenance
pnpm clean        # Clean build files
pnpm lint         # Run linter
pnpm test         # Run tests
```
