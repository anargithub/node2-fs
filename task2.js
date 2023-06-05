const fs = require('fs');

fs.readFile('task2.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Ошибка чтения файла:');
    }

    const jsonData = JSON.parse(data);
    const count = jsonData.count;
    const target = jsonData.target;

    console.log('Count:', count);

    jsonData.count++;

    if (count === target) {
        console.log('Счётчик уже максимальный');
    }

    
    const newData = JSON.stringify(jsonData);
    fs.writeFile('task2.json', newData, 'utf8', () => {
    
    });
  
});

