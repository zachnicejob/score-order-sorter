import fs from 'fs';
import path from 'path';
import * as config from '../env/config.js';

const sortFilenames = (scoreOrder, files) => {
    let sortedFilenames = [];

    scoreOrder.forEach(instrument => {
        const matches = files.filter(filename =>
            filename.toLowerCase().includes(instrument)
            );
        console.log(`Found ${matches.length} ${instrument} parts.`)

        // In case multiple parts (flute 1, flute 2, etc.) exist, this sorts them.
        matches.sort();
        sortedFilenames = sortedFilenames.concat(matches);
    });

    console.log(`Sorted Files: ${sortedFilenames}`);
    return sortedFilenames;
};

const isIndexPresent = (filename) => {
    return !isNaN(filename.charAt(0)) || filename.charAt(0) === '_';
}

const removeOldIndexes = (files) => {
    const cleanedFiles = [];
    files.forEach((file) => {
        if (!isIndexPresent(file)) {
            return;
        };

        let cleanedFile = file;
        while (isIndexPresent(cleanedFile)) {
            cleanedFile = cleanedFile.slice(1);
        }
        cleanedFiles.push(cleanedFile);

        const oldPath = path.join(config.DIRECTORY_PATH, file);
        const newPath = path.join(config.DIRECTORY_PATH, `${cleanedFile}`);
        
        fs.rename(oldPath, newPath, err => {
            if (err) {
                console.error(`Error renaming file ${file}:`, err);
            } else {
                console.log(`Renamed ${file} to ${path.basename(newPath)}`);
            }
        });
    });

    return cleanedFiles;
}

const sortScores = (scoreOrder) => {
    scoreOrder.shift(); // no longer need identification element

    // Read the directory
    fs.readdir(config.DIRECTORY_PATH, (err, files) => {
        if (err) {
        console.error('Error reading directory:', err);
        return;
        }
        
        // If sorting needs to be redone, this will reset the filename indexes.
        const cleanedFiles = files.some(file => isIndexPresent(file)) ? 
            removeOldIndexes(files) : files;

        const sortedFiles = sortFilenames(scoreOrder, cleanedFiles);
        // const sortedFiles = sortFilenames(scoreOrder, files);

        // Rename and move files to reorder them
        sortedFiles.forEach((file, index) => {
            const oldPath = path.join(config.DIRECTORY_PATH, file);
            const newPath = path.join(config.DIRECTORY_PATH, `${index+1}_${file}`);
            
            fs.rename(oldPath, newPath, err => {
                if (err) {
                    console.error(`Error renaming file ${file}:`, err);
                } else {
                    console.log(`Renamed ${file} to ${path.basename(newPath)}`);
                }
            });
        });
    });
};

export default sortScores;