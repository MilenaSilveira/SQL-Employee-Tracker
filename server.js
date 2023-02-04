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
                    viewDepartments();
                    break;
                    
                    case 'View all Roles': 
                    viewRoles();
                    break;
        
                    case 'View all Employees': 
                    viewEmployees();
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


function viewDepartments(){


    // viewDepartments = () => {
    //     db.query('SELECT * FROM department', function (err, rows) {
    //         if(err) throw err
    //         console.table(rows);
    //         promptUser();
    //       });
    // }
    
}

function viewRoles(){
    db.findAllRoles()
    .then(console.table)

   
}


function viewEmployees(){
    db.findAllEmployees()
    .then(console.table)
    //goes to db that you required and uses your find all employees method
    //.then console.table results
    //call the main prompt
   
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