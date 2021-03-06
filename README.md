# PMA CLIENT
### UPT SOFTWARE ENGINEERING FUNDAMENTALS PROJECT

#### Description 📝:
This is the client of the Project Management App for Software Engineering Fundamentals Laboratory.

##### Technology Stack 👾:
#### Frontend:
- React ❤️
- TailwindCSS (utility-first CSS)
- Jest/React-Testing Library (testing)
- React Context API (state-management)
- Axios (HTTP requests)

#### Backend:
- Nodejs + TypeScript
- Express
- TypeORM
- Postgres (database)
- JWT Tokens (user auth)  
- Jest

#### Team members 👨‍🔧:
- Marius-Adrian Florescu
- Victor-Alexandru Cerna

#### Project structure ⛩:
- Every page will be placed in the pages folder.
- Every component will be placed in the components folder.
- Every custom hook / functions will be placed in the utils folder.
- Images that are required for the development will be placed in the assets folder. 

#### Available feautures ⚡️:
- Register (2 step form), where you can either register as a Student or Company
- Login, regardless of the account type you have.
- Logout  
- Basic homepage (will change it later).
- As a company user, you can now create new projects.
- As student, you can view the list of the projects (regardless of the status open/closed)
- As student, you can now apply to projects that have open status.

#### UML Case Diagram:
- [Click here](https://lucid.app/lucidchart/invitations/accept/4d821252-69c9-4bee-8bfa-3a42326eedf4)

#### SQL Diagram:
- [Click here](https://drawsql.app/me-38/project-management-app)

#### How to run ⚙️:
- You need to have the server running (check server repository README.md).
- Clone the repository.
- Install the depedencies (npm install)
- Copy the contents of the .env.example and paste them in a .env file, filling it with the necessary data.
- npm start ✅