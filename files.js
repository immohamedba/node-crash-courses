const fs = require('fs');

// Reading files

fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

// wrinting files
fs.writeFile('./docs/blog1.txt', 'Hello Mohmed', () => {
    console.log('file was wiritten');
});

fs.writeFile('./docs/blog2.txt', 'Hello agin', () => {
    console.log('new file is created');
});


// Directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');
    })
}


if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}