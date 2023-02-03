const connection = require('./connection');

class DB {

    constructor(connection) {
        this.connection = connection;
    }

    //Find all employees, join rolesand departments to display their roles, salaries, departments and managers.
    findAllEmployees() {
        //select method
        const sql = `
                SELECT
                employees.id AS 'Employee ID',
                employees.first_name AS "First Name",
                employees.last_name AS "Last Name",
                roles.title AS "Job Title",
                departments.name AS "Department",
                roles.salary AS "Salary",
                employees.manager_id AS "Manager"
                FROM employees
                LEFT JOIN roles
                ON roles.id = employees.role_id
                LEFT JOIN departments
                ON departments.id = roles.department_id;`;

        return this.connection.promise().query(sql);
    };

    findAllRoles() {
        const sql =  `
        SELECT
        roles.title AS 'Job Title',
        roles.id AS 'Role ID',
        departments.name AS "Department Name",
        roles.salary AS 'Salary'
        FROM roles
        LEFT JOIN departments
            ON roles.department_id = departments.id;
        `;
    return this.connection.promise().query(sql);
    };

    findAllDepartments(){
        const sql = `SELECT
            departments.id,departments.name AS "Department Name" FROM departments;
        ` ;
    return this.connection.promise().query(sql);
    };


    //Add new Employee
    addEmployee(first_name, last_name, role_id, manager_id) {
        const sql = `INSERT INTO employees(first_name,last_name,role_id,manager_id)
    VALUES (?,?,?,?);`;
        return this.connection.promise().query(sql, [first_name, last_name, role_id, manager_id]);
    };
   //Add new role
    addRole(title, salary, department_id) {
            const sql = `INSERT INTO roles(title,salary,department_id)
            VALUES (?,?,?);`;
            return this.connection.promise().query(sql, [title, salary, department_id]);
        
          };
          
    addDepartment(name) {
            const sql = `INSERT INTO departments(name)
            VALUES (?);`;
            return this.connection.promise().query(sql, [name]);
        
          };      


    updateEmployeeRole(role_id, id) {
            const sql = `UPDATE employees
            SET role_id=?
            WHERE id=?;`;
            return this.connection.promise().query(sql, [role_id, id]);
        };
    }



module.exports = new DB(connection);