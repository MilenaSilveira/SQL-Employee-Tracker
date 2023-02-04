const inquirer = require('inquirer');
// const db = require('./db/index');
const conTable = require('console.table');
const inport = require('./db/connection');


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

  function addDepartment() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "dptName",
          message: "Please enter new Department: ",
        },
      ])
      .then((dptResponse) => {
        db.query(`INSERT INTO departments (name)
          VALUES ('${dptResponse.dptName}')`);
          loadOptions();
      });
  }

function addRole() {
    db.query(`SELECT * FROM departments`, function (err, response) {
      
      let dptOptions = results.map((department) => {
        return { name: department.name, value: department.id };
      });
      
      inquirer
        .prompt([
          {
            type: "input",
            name: "enterRole",
            message: "Please enter a new Role: ",
          },
          {
            type: "input",
            name: "roleSalary",
            message: "Please enter the salary for this Role: ",
          },
          {
            type: "list",
            name: "deptOptions",
            message: "Please select a a Department for this Role: ",
            choices: dptOptions,
          },
        ])
        .then((choices) => {
        db.query(`INSERT INTO role (title, salary, department_id)
        VALUES ('${choices.enterRole}', '${choices.roleSalary}', '${choices.deptOptions}')`);
        loadOptions();
        });
    });
  }
  

  function addEmployee() {
    db.query(`SELECT * FROM role`, function (err, response) {
      db.query(`SELECT * FROM employee`, function (err, responses) {

        let roleOptions = response.map((role) => {
          return { name: role.title, value: role.id };
        });
        
        inquirer
          .prompt([
            {
              type: "input",
              name: "enterFirst",
              message: "Please enter employees first name: ",
            },
            {
              type: "input",
              name: "enterLast",
              message: "Please enter employee last name: ",
            },
            {
              type: "list",
              name: "addRole",
              message: "Please enter employee Role: ",
              choices: roleOptions,
            },
           
          ])
          .then((result) => {
           
            db.query(`INSERT INTO employee (first_name, last_name, role_id)
            VALUES ('${result.enterFirst}', '${result.enterLast}', '${result.addRole}'`);
            loadOptions();
          });
      });
    });
  }

  function updateEmployeeRole() {
    db.query(`SELECT * FROM employee`, function (err, response) {
      db.query(`SELECT * FROM role`, function (err, responses) {
        let empOptions = response.map((employee) => {
          return {
            name: employee.first_name.concat(" " + employee.last_name),
            value: employee.id,
          };
        });
  
        let chooseRole = responses.map((role) => {
          return { name: role.title, value: role.id };
        });
        inquirer
          .prompt([
            {
              type: "list",
              name: "roleUpdate",
              message: "Please select the Role you would like to update: ",
              choices: empOptions,
            },
            {
              type: "list",
              name: "roleChoice",
              message: "Please choose a Role: ",
              choices: chooseRole,
            },
            
          ])
          .then((result) => {
            db.query(`
            UPDATE employee
            SET role_id = '${result.chooseRole}'
            WHERE id = '${result.roleUpdate}'
            `);
            // console.log(response);
            loadOptions();
          });
      });
    });
  }

function quit() {
    console.log('Goodbye!');
    process.exit();
}

// loadMainPrompts();