import { readdir, readFile, writeFile, mkdir } from 'fs/promises';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateDocs() {
  const srcDir = join(__dirname, '../src');
  const outputDir = join(__dirname, '../src/content/blog/project-updates');
  
  try {
    // Create output directory if it doesn't exist
    await mkdir(outputDir, { recursive: true });
    
    // Read all .astro files recursively
    const files = await getAllFiles(srcDir);
    const astroFiles = files.filter(file => file.endsWith('.astro'));
    
    // Generate documentation for each file
    for (const file of astroFiles) {
      const content = await readFile(file, 'utf-8');
      const docs = generateFileDoc(file, content);
      
      // Write documentation
      const outputPath = join(outputDir, `${basename(file, '.astro')}.mdx`);
      await writeFile(outputPath, docs);
    }
    
    console.log('Documentation generated successfully!');
  } catch (error) {
    console.error('Error generating documentation:', error);
  }
}

async function getAllFiles(dir) {
  const files = await readdir(dir, { withFileTypes: true });
  const paths = [];
  
  for (const file of files) {
    const path = join(dir, file.name);
    if (file.isDirectory()) {
      paths.push(...await getAllFiles(path));
    } else {
      paths.push(path);
    }
  }
  
  return paths;
}

function generateFileDoc(filePath, content) {
  const componentName = basename(filePath, '.astro');
  const relativePath = filePath.split('src/')[1];
  
  // Extract frontmatter props
  const propsMatch = content.match(/interface Props {([^}]+)}/);
  const props = propsMatch ? propsMatch[1].trim() : 'No props defined';
  
  return `---
title: ${componentName} Documentation
date: ${new Date().toISOString().split('T')[0]}
---

# ${componentName} Component

**File Path:** \`${relativePath}\`

## Props

\`\`\`typescript
${props}
\`\`\`

## Usage Example

\`\`\`astro
---
import ${componentName} from '${relativePath}';
---

<${componentName} />
\`\`\`
`;
}

generateDocs();