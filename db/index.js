// const connection = require('./connection');

// class DB {

//     constructor(connection) {
//         this.connection = connection;
//     }

//     //Find all employees, join rolesand departments to display their roles, salaries, departments and managers.
//     findAllEmployees() {
//         //select method
//         const sql = `
//                 SELECT
//                 employee.id AS 'Employee ID',
//                 employee.first_name AS "First Name",
//                 employee.last_name AS "Last Name",
//                 role.title AS "Job Title",
//                 department.name AS "Department",
//                 role.salary AS "Salary",
//                 employee.manager_id AS "Manager"
//                 FROM employee
//                 LEFT JOIN roles
//                 ON role.id = employee.role_id
//                 LEFT JOIN department
//                 ON department.id = role.department_id;`;

//         return this.connection.promise().query(sql);
//     };

//     findAllRoles() {
//         const sql =  `
//         SELECT
//         role.title AS 'Job Title',
//         role.id AS 'Role ID',
//         departments.name AS "Department Name",
//         role.salary AS 'Salary'
//         FROM role
//         LEFT JOIN department
//             ON role.department_id = department.id;
//         `;
//     return this.connection.promise().query(sql);
//     };

//     findAllDepartments(){
//         const sql = `SELECT
//             departments.id,department.name AS "Department Name" FROM department;
//         ` ;
//     return this.connection.promise().query(sql);
//     };


//     //Add new Employee
//     addEmployee(first_name, last_name, role_id, manager_id) {
//             const sql = `INSERT INTO employee(first_name,last_name,role_id)
//             VALUES (?,?,?);`;
//             return this.connection.promise().query(sql, [first_name, last_name, role_id, manager_id]);
//     };
//    //Add new role
//     addRole(title, salary, department_id) {
//             const sql = `INSERT INTO role(title,salary,department_id)
//             VALUES (?,?,?);`;
//             return this.connection.promise().query(sql, [title, salary, department_id]);
        
//           };
//      //Add Department     
//     addDepartment(name) {
//             const sql = `INSERT INTO department(name)
//             VALUES (?);`;
//             return this.connection.promise().query(sql, [name]);
        
//           };      

//     //Update Employee Role
//     updateEmployeeRole(role_id, id) {
//             const sql = `UPDATE employee
//             SET role_id=?
//             WHERE id=?;`;
//             return this.connection.promise().query(sql, [role_id, id]);
//         };
//     };



// module.exports = new DB(connection);