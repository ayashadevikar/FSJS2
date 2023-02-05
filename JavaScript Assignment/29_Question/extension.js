//29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

function getFileExtension(filename) {
    const extension = filename.split('.').pop();
    return extension;
}

// passing the filename
const result1 = getFileExtension('extension.js');
console.log(result1);

// output

// js