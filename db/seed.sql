INSERT INTO department (name)
VALUES ("Engineering"),
        ("Sales"),
        ("Finance"),
        ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 90000, 2),
    ("Salesperson", 70000, 2),
    ("IT Specialist", 130000, 1),
    ("Software Engineer", 110000, 1),
    ("Project Manager", 150000, 3),
    ("Accountant", 100000, 3),
    ("Legal Team Lead", 230000, 4),
    ("Lawyer", 180000, 4);

INSERT INTO employee (first_name,last_name,role_id)
VALUES ("John","Smith",1),
    ("Bob","White",1),
    ("Haley","Connor",3),
    ("Sarah","Williams",4),
    ("Mario","Fontanez",1),
    ("Kyle","Curtis",2),
    ("Crystal","Sanders",4),
    ("Matt","Miller",2),
    ("Jane","Jones",2),
    ("Juan","Garcia",3);
    ("Dom","Brown",4);