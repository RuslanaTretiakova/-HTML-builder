const fs = require('fs');
const path = require('path');
const folderPath = path.resolve(__dirname, 'secret-folder');

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => {
      if (file.isFile()) {
        const filePath = path.resolve(folderPath, file.name);
        const fileExt = path.parse(file.name).ext.slice(1);

        fs.stat(filePath, (err, stats) => {
          if (err) {
            console.log(err);
          } else {
            const fileSize = (stats.size / 1024).toFixed(2) + 'kb';

            process.stdout.write(
              `${path.parse(file.name).name} - ${fileExt} - ${fileSize} \n`
            );
          }
        });
      }
    });
  }
});
