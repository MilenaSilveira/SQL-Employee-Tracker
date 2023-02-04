const inquirer = require('inquirer');
const db = require('./db/index');
const conTable = require('console.table');

const loadMainPrompts = [
   
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
    ];

    function loadOptions() {

        inquirer.prompt(loadMainPrompts).then((input) => {
            switch (input.mainEmployeeOptions) {

                case 'View all Departments':
                    console.log('working')
                    showDepartments();
                    break;
                    
                    case 'View all Roles': 
                    showRoles();
                    break;
        
                    case 'View all Employees': 
                    showEmployees();
                    break;
        
                    case 'Add a Department': 
                    addDept();
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
            })
      };


function showDepartments() {
    db.query(`SELECT * FROM departments`, function (err, response) {
          console.table(response);
          loadOptions();
        });
      }

function showRoles(){
    db.query(
        `
  SELECT
  role.title AS 'Job Title', role.id AS 'Role ID', department.name AS "Department Name", role.salary AS 'Salary'
  FROM role
  LEFT JOIN department
      ON role.department_id = departments.id
  `, function (err, response) {
    console.table(response);
    loadOptions();
  }
    )
};

function showEmployees() {
    db.query(
      `
      SELECT employee.id AS 'Employee ID', employee.first_name AS "First Name", employee.last_name AS "Last Name", 
      role.title AS "Job Title", department.name AS "Department", role.salary AS "Salary", employee.manager_id AS "Manager"
      FROM employee
      LEFT JOIN role
          ON role.id = employee.role_id
      LEFT JOIN department
          ON department.id = role.department_id
      `,
      function (err, response) {
        console.table(response);
        loadOptions();
      }
    );
  }


function addDept(){
    db.addDepartment()
    .then(result =>{
        inquirer.prompt([
            {
            type: 'input',
            name: 'deptName',
            message: "Please enter the Department name: ",
        }
        ])
    }
   
    )
}

function addRole(){
    db.addRole().then
    inquirer.prompt([
        {
        type: 'input',
        name: 'roleName',
        message: "Please enter Role: ",
    }
    ])
   
}

function addEmployee(){
    db.addEmployee()
    inquirer.prompt([
        {
        type: 'input',
        name: 'roleName',
        message: "Please enter Role: ",
    }
    ])
  
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
 
}


function quit() {
    console.log('Goodbye!');
    process.exit();
}

loadMainPrompts();