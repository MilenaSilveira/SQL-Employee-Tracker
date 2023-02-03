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

    .then((answers) => {
        const {choices} = answers;

        if (choices === 'View all Departments'){
            viewDepartments();
        }
        if (choices === 'View all Roles'){
            viewRoles();
        }
        if (choices === 'View all Employees'){
            viewEmployees();
        }
        if (choices === 'Add a Department'){
            addDepartment();
        }
        if (choices === 'Add a Role'){
            addRole();
        }
        if (choices === 'Add an Employee'){
        addEmployee();
        }
        
        if (choices === 'Update an Employee Role'){
            updateEmployeeRole()
        }
        if (choices === 'Quit'){
            quit();
            }
    })

}



function viewEmployees(){

}

function updateEmployeeRole(){

}









function quit() {
    console.log('Goodbye!');
    process.exit();
}