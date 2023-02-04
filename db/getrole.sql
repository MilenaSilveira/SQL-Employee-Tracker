SELECT
    employee.id AS 'Employee ID',
    employee.first_name AS "First Name",
    employee.last_name AS "Last Name",
    role.title AS "Job Title",
    department.name AS "Department",
    role.salary AS "Salary",
    FROM employees
    LEFT JOIN roles
        ON roles.id = employees.role_id
    LEFT JOIN departments
        ON departments.id = roles.department_id