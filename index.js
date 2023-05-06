const fs = require('fs');
const {argv} = process;

function init() {
    fs.readFile(path.join())
}

const [command, title, content] = argv.slice(2);

switch (command) {
    case 'create':
        create(title, content);
        break;
    default: console.log('Неизвестная команда.');
}

function create(title, content) {
    fs.readFile('notes.json', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        notes.push({title, content});
        const json = JSON.stringify(notes);

        fs.writeFile('notes.json', json, err => {
            if (err) throw err;
            console.log('Заметка создана');
        });
    });
}