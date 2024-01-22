const fs = require('fs').promises;
const path = require('path');

const styleDir = path.resolve(__dirname, 'styles');
const outputFile = path.resolve(__dirname, 'project-dist', 'bundle.css');

async function compileStyles() {
  try {
    const files = await fs.readdir(styleDir);

    const filesCss = files.filter(
      (file) => path.extname(file).toLowerCase() === '.css'
    );

    const compileFiles = filesCss.map((file) => {
      return fs.readFile(path.resolve(styleDir, file), 'utf-8');
    });

    const bundleFiles = await Promise.all(compileFiles);
    const bundleContent = bundleFiles.join('\n');

    await fs.writeFile(outputFile, bundleContent, 'utf-8');
  } catch (error) {
    console.error(error);
  }
}

compileStyles();