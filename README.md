# User Directory

A small web app that fetches a list of users from a public API and lets you search them by name. Built to practice JavaScript (`fetch`, `async/await`, array methods, DOM manipulation) and a Git branching and pull-request workflow.

## Live Demo

<!-- Add your GitHub Pages link here -->
https://<your-username>.github.io/user-directory/

## Features

- Fetches users from the JSONPlaceholder API
- Loading and error states
- Live search by name
- Responsive card-style layout

## Tech Stack

- HTML5, CSS3
- JavaScript (ES6+ modules)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) as the data source

## Screenshot

![User Directory screenshot](screenshot.png)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/user-directory.git
   cd user-directory
   ```
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**.

## Project Structure

```
user-directory/
├── index.html
├── app.js
├── style.css
└── README.md
```

## What I Learned

- Handling asynchronous requests with `async/await` and `try/catch`
- Rendering data with `map` and filtering it with `filter`
- Working with Git branches, pull requests, and merges

## Future Improvements

- Sort users A-Z / Z-A
- Debounced search
- User detail view
- Retry button on fetch failure