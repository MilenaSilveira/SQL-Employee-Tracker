const inquirer = require('inquirer');
// const express = require ('express');
const db = require('./db/index');
require('console.table');



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


function viewDepartments(){
    db.findAllDepartments()

    loadMainPrompts()
}

function viewRoles(){
    db.findAllRoles()

    loadMainPrompts()
}
//Show Employee details.

function viewEmployees(){
    db.findAllEmployees()
    //goes to db that you required and uses your find all employees method
    //.then console.table results
    //call the main prompt
    loadMainPrompts()
}

function addDepartment(){
    db.addDepartment()


    loadMainPrompts()
}

function addRole(){
    db.addRole().then

    loadMainPrompts()
}

function addEmployee(){
    db.addEmployee()

    loadMainPrompts()
}

function updateEmployeeRole(){
    db.updateEmployeeRole()
//find all employees
// put those employees into inquirer prompt
//set up a variable for the employee that the user selects 
// find all roles
// put those into a inquirer prompt
//.then - use your update employee method, passing in the employee they selected, 
//and the role they choose to assign to them
    loadMainPrompts()
}


function quit() {
    console.log('Goodbye!');
    process.exit();
}