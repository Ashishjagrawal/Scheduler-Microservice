
# Job Scheduler Microservice

A scalable microservice for scheduling and managing jobs. This service provides API endpoints for job management, such as listing all jobs, retrieving details of a specific job by ID, and creating new jobs.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Scalability](#scalability)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Job Scheduling:** Schedule customized jobs with flexibility in configuration.
- **API Endpoints:** Manage jobs through RESTful API endpoints.
- **Database Integration:** Store job-related information in a PostgreSQL database.

## Technologies Used

- **Language:** TypeScript
- **Framework:** Nest.js
- **Database:** PostgreSQL
- **Documentation:** Swagger

## Setup and Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Ashishjagrawal/Scheduler-Microservice.git
   cd Scheduler-Microservice
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:** Create a `.env` file in the root directory and set up your database and other configurations.
   ```bash
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database_name
   ```
   Replace your_username, your_password, and your_database_name with your actual PostgreSQL credentials.

4. **Run the Application:**

   ```bash
   npm run start
   ```

   The server will start on the specified port (default: 3000).

## API Endpoints

- **List All Jobs:** `GET /jobs`
- **Retrieve a Specific Job:** `GET /jobs/:id`
- **Create a New Job:** `POST /jobs`
- **Update a Job:** `PUT /jobs/:id`

For detailed API documentation, visit `http://localhost:3000/api-docs`.

## Scalability

The application is designed with scalability in mind, capable of handling a large number of users, services, and API requests. For a detailed overview of the scalability strategies implemented, refer to the [SCALABILITY.md](SCALABILITY.md) document in the repository.
