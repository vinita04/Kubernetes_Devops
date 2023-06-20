--------------------------------------------------------
Vinita Bulchandani_3167173: Kubernetes and DevOps Advance
--------------------------------------------------------

Requirements:
- Database: We are using the `mysql:5.6` image.
- Service: We are using `Node:18`.

Code Repository:
- Link: [https://github.com/vinita04/Kubernetes_Devops](https://github.com/vinita04/Kubernetes_Devops)

Docker Hub:
- URL: [https://hub.docker.com/layers/vinita2204/node-app/latest/images/sha256-a16b5c94c71a9ee2b55d87a7f23fa0c65bef3d09ab2b3b2723a6b51a868d2c65?context=explore](https://hub.docker.com/layers/vinita2204/node-app/latest/images/sha256-a16b5c94c71a9ee2b55d87a7f23fa0c65bef3d09ab2b3b2723a6b51a868d2c65?context=explore)

Service API Tier URL:
- http://34.27.32.68:80 (Currently Switched off due to high cost of GCP, Can switch it on whenever required for evaluation)

----------------------------------
Database Tier
----------------------------------

To set up the database, follow these steps:

1) Create a MYSQL Pod by running `statefulset.yaml`. Provide the database connection password in `mysql-secret.yaml`.

2) Create a headless service by running `mysql-service.yaml`. This will provide a stable and unique network identifier.

Once the database is successfully created, run the following scripts to create the database and database table:

```sql
CREATE DATABASE IF NOT EXISTS EMPDATA;
USE EMPDATA;
CREATE TABLE EMPLOYEE (
  Emp_No INTEGER PRIMARY KEY,
  Emp_Name TEXT NOT NULL,
  Emp_Add TEXT NOT NULL,
  Emp_Phone TEXT NOT NULL,
  Dept_Name TEXT NOT NULL
);
```

After creating the table, execute the following scripts to insert data:

```sql
INSERT INTO EMPLOYEE VALUES (0001, 'Rahul', 'Noida', '9855498465', 'Sales');
INSERT INTO EMPLOYEE VALUES (0002, 'Suresh', 'Gurgaon', '9565498495', 'IT');
INSERT INTO EMPLOYEE VALUES (0003, 'Mahesh', 'Mumbai', '9765498425', 'IT');
INSERT INTO EMPLOYEE VALUES (0004, 'Suraj', 'Kolkata', '9856549841', 'Sales');
INSERT INTO EMPLOYEE VALUES (0005, 'Rajesh', 'Noida', '9855497805', 'Finance');
INSERT INTO EMPLOYEE VALUES (0006, 'Shyam', 'Bangalore', '9855497845', 'IT');
```

------------------------------
Service API Tier
------------------------------

To set up the Service API Tier, follow these steps:

1) Create the microservice Pod by running `deployment.yaml`. Provide the database configuration in `configmap.yaml`.

2) Create a load-balancer service by running `load-balancer-service.yaml`. This will allow connections to the Service API Tier from outside the cluster.
