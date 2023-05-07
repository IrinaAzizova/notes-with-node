const fs = require('fs');
const {constans} = fs;
const {argv} = process;

/* function init() {
    fs.access('notes.json', fs.F_OK, (err) => {
        if (err) {          
            fs.writeFile('notes.json', '[]', err => {
                if (err) throw err;
                console.log('Файл notes.json создан');
            });
        }
    });    
}
init(); */

const [command, title, content] = argv.slice(2);

switch (command) {
    case 'create':
        create(title, content);
        break;
    case 'list': 
        list();
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
    console.log('create');
}


function list() {
    fs.readFile('notes.json', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        notes.forEach((note, i) => {
            console.log(`${i + 1} - ${note.title} - ${note.content}`);
        });
    });
}