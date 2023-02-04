SELECT
    employee.id AS 'Employee ID',
    employee.first_name AS "First Name",
    employee.last_name AS "Last Name",
    role.title AS "Job Title",
    department.name AS "Department",
    role.salary AS "Salary"
    FROM employee LEFT JOIN role ON role.id = employee.role_id
    LEFT JOIN department ON department.id = role.department_id