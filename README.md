# DevLabs Challenge - Todo API Backend

This is the backend API for a Todo management application, built as part of the DevLabs Junior Full-Stack Developer Challenge. The API allows users to create, read, update, and delete todos with JWT-based authentication.

## Features

- **User Authentication**: JWT-based authentication for secure access.
- **CRUD Operations**: Create, read, update, and delete todos.
- **Validation**: Input validation using Zod schemas.
- **Database**: Uses Sequelize ORM with a relational database.
- **API Documentation**: Interactive Swagger documentation.
- **Testing**: Unit tests with Jest.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for building RESTful APIs.
- **TypeScript**: Typed superset of JavaScript for better code quality.
- **Sequelize**: ORM for database interactions.
- **JWT**: JSON Web Tokens for authentication.
- **Zod**: Schema validation library.
- **Swagger**: API documentation tool.
- **Jest**: Testing framework for unit tests.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/devlabs-challenge.git
   cd devlabs-challenge/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the database:
   - Configure your database connection in `src/config/database.ts`.
   - Run migrations if needed (assuming Sequelize CLI is set up).

4. Create a `.env` file with necessary environment variables (e.g., JWT secret, database URL).

5. Build the project:
   ```
   npm run build
   ```

## Usage

1. Start the development server:
   ```
   npm run dev
   ```

2. The API will be running on `http://localhost:3000`.

## API Documentation

Swagger documentation available at:

http://localhost:3000/api-docs

## Testing

Run the test suite:
```
npm test
```

## Project Structure

```
backend/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── config/
│   │   └── database.ts
│   ├── controllers/
│   │   └── todo.controller.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── validate.middleware.ts
│   ├── models/
│   │   └── todo.ts
│   ├── routes/
│   │   └── todo.routes.ts
│   ├── schemas/
│   │   └── todo.schema.ts
│   ├── services/
│   │   └── todo.service.ts
│   └── tests/
│       └── todo.test.ts
├── jest.config.js
├── package.json
└── tsconfig.json
```

## Contributing

This is a challenge project. Feel free to fork and improve!