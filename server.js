const { default: inquirer } = require('inquirer');
const db = require('./db/index');

// init();

// function init(){

// }



function loadMainPrompts = () => {
    inquirer.prompt([
    {
        type: 'list',
        name: 'mainEmployeeOptions',
        message: 'Please choose one of the following: ',
        choices: [
            'View all Departments',
            'View all Roles',
            'View all Employees',
            'Add a Department',
            'Add a Employee',
            'Update all Departments',
            'Update employee information',
            'Exit'
        ]
    }
    ])

}



function viewEmployees(){

}

function updateEmployeeRole(){

}









function quit() {
    console.log('Goodbye!');
    process.exit();
}