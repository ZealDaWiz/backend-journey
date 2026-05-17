import chalk from 'chalk';

import dotenv from 'dotenv';
dotenv.config();

import figlet from 'figlet';

figlet('GRANDVILLE HOSPITAL', (error, data) => {
    if (error) {
     console.log('Error:', error.message);
     return;
    }
console.log(chalk.green(data));
console.log(process.env.HOSPITAL_NAME);
console.log(process.env.PORT);
});


figlet('ZEAL OLALEKAN OYATOKUN', (error, data) => {
    if(error) {
     console.log('Error:', error.message);
     return;
    }
   console.log(data);
});
