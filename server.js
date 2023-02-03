const inquirer = require('inquirer');
const express = require ('express');
const db = require('./db/index');

// init();

// function init(){

// }



function loadMainPrompts() {
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
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role',
            'Quit'
        ]
    }
    ])

    .then((input) => {
       switch (input.loadMainPrompts) {
        case 'View all Departments':
            viewDepartments();
            break;
            case 'View all Roles':
            viewRoles();
            break;
            case 'View all Employees':
            viewEmployees();
            break;
            case 'Add a Department':
            addDepartment();
            break;
            case 'Add a Role':
            addRole();
            break;
            case 'Add an Employee':
            addEmployee();
            break;
            case 'Update an Employee Role':
            updateEmployeeRole();
            break;
            case 'Quit':
            quit();
            break;
       }

})}

//Show Employee details.

function viewEmployees(){
    console.log('Employee list: ');
    db.query(
        
    )
}

function updateEmployeeRole(){

}









function quit() {
    console.log('Goodbye!');
    process.exit();
}