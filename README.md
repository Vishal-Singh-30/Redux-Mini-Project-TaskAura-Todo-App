# TaskAura - Todo App

TaskAura is a modern and efficient todo application built using React and Vite. It helps users manage their daily tasks by providing a user-friendly interface to add, edit, delete, and organize tasks.

## Visit the Live Site
You can check out the live version of the project [TaskAura by Vishal Singh](https://taskaura-by-vs.netlify.app/).

![Project Picture](./TaskAura%20Project%20Pic%201.png)
![Project Picture](./TaskAura%20Project%20Pic%202.png)
![Project Picture](./TaskAura%20Project%20Pic%203.png)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Components](#components)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with TaskAura, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Vishal-Singh-30/TaskAura.git
    cd TaskAura
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

## Usage

To run the application locally, use the following command:

```bash
npm run dev
```
This will start the development server, and you can view the application in your browser at [http://localhost:3000](http://localhost:3000).

## Features
- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Organize tasks using tags and columns

## Components
The application is composed of the following key components:

### TaskForm
The `TaskForm` component allows users to add and edit tasks. It includes input fields for the task description, status, and tags.

### TaskCard
The `TaskCard` component displays individual tasks, showing the description, tags, and a delete button.

### TaskColumn
The `TaskColumn` component organizes tasks into columns, allowing for easy categorization and sorting.

### Tag
The `Tag` component represents a tag that can be assigned to tasks for better organization.

## Scripts
The following scripts are available:

- `npm run dev`: Starts the development server
- `npm run build`: Builds the application for production
- `npm run lint`: Runs ESLint to check for linting errors
- `npm run preview`: Previews the production build

## Dependencies
TaskAura relies on the following key dependencies:

- React: ^18.3.1
- React-DOM: ^18.3.1
- Vite: ^5.3.4

## Development
TaskAura is configured to use Vite as the build tool and ESLint for linting.

### Vite Configuration
The Vite configuration can be found in `vite.config.js`.

### ESLint Configuration
The ESLint configuration can be found in `.eslintrc.cjs`.

## Contributing
Contributions are welcome! If you would like to contribute to TaskAura, please fork the repository and create a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

