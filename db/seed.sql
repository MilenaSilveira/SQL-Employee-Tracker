INSERT INTO departments (name)
VALUES ("Engineering"),
        ("Sales"),
        ("Finance"),
        ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 90000, 2),
    ("Salesperson", 70000, 2),
    ("IT Specialist", 130000, 1),
    ("Software Engineer", 110000, 1),
    ("Project Manager", 150000, 3),
    ("Accountant", 100000, 3),
    ("Legal Team Lead", 230000, 4),
    ("Lawyer", 180000, 4);

INSERT INTO employees (first_name,last_name,role_id,manager_id)
VALUES ("John","Smith",1,3),
    ("Bob","White",1,NULL),
    ("Haley","Connor",3,NULL),
    ("Sarah","Williams",4,),
    ("Mario","Fontanez",1,NULL),
    ("Kyle","Curtis",2,1),
    ("Crystal","Sanders",4,2),
    ("Matt","Miller",2,NULL),
    ("Jane","Jones",2,3),
    ("Juan","Garcia",3,1);
    ("Dom","Brown",4,2);