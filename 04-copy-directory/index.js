const fs = require('fs').promises;
const path = require('path');

const folderPath = path.resolve(__dirname, 'files');
const destPath = path.resolve(__dirname, 'files-copy');

async function copyDirectory() {
  try {
    await fs.rm(destPath, { recursive: true, force: true });
    await fs.mkdir(destPath, { recursive: true });
    const files = await fs.readdir(folderPath);

    for (const file of files) {
      const sourceFilePath = path.resolve(folderPath, file);
      const destFilePath = path.resolve(destPath, file);

      await fs.copyFile(sourceFilePath, destFilePath);
    }
  } catch (error) {
    console.error(error);
  }
}

copyDirectory();
