// Future Feature

// import exec from 'child_process';
// import fs from 'fs';
// import path from 'path';
// import * as config from '../constants/config.js';

// const openWithAcrobat = (directory) => {
//     fs.readdir(directory, (err, files) => {
//         if (err) {
//             console.error(`Error reading directory: ${err}`);
//             return;
//         }
        
//         files.forEach(file => {
//             if (path.extname(file).toLowerCase() === '.pdf') {
//                 const filePath = path.join(directory, file);
//                 const command = `start acrobat "${filePath}"`; // Assuming "acrobat" is in your PATH environment variable

//                 exec(command, (error, stdout, stderr) => {
//                     if (error) {
//                         console.error(`Error opening ${filePath} with Adobe Acrobat: ${error}`);
//                     } else {
//                         console.log(`Opened ${filePath} with Adobe Acrobat.`);
//                     }
//                 });
//             }
//         });
//     });
// };

// // export default openWithAcrobat;
// openWithAcrobat(config.DIRECTORY_PATH);
