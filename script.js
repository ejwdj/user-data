const fs = require('fs');
const { parse } = require('path');
const filename = 'timeData.json';
const jsonData = fs.readFileSync(filename, 'utf-8');
const parsedData = JSON.parse(jsonData);
const currentTime = new Date();
const currentHour = currentTime.getHours();
let timeOfDay;
const timeData = {
    currentHour: currentHour,
    timeOfDay: timeOfDay
};


console.log('if starting ...')
if (currentHour > 5 && currentHour < 12){
    timeOfDay = "ranok";
} else if (
    currentHour > 12 && currentHour < 18
){
    timeOfDay = "День";
} else if (
    currentHour > 18 && currentHour < 24
){
    timeOfDay = "Вечер";
} else {timeOfDay = "Ночь"};

console.log(`Сейчас - ${timeOfDay}`);
parsedData.currentHour = timeOfDay
fs.writeFileSync(filename, JSON.stringify(parsedData, null,2), 'utf8');
console.log(`File: ${filename} updated`)
// TODO: create repo
