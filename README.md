# Dev Stack Builder

Dev Stack Builder is a responsive React website that helps developers explore different technologies and create their own technology stack.

## Technologies Used

- React
- JavaScript
- Tailwind CSS
- React Toastify
- JSON
- Vite

## Key Features

1. Browse different web development technologies with ratings, difficulty levels, categories, and descriptions.
2. Add technologies to a personal stack without allowing duplicate items.
3. Remove individual technologies or clear the entire stack with toast notifications.

## React Concepts

### 1. What is JSX?

JSX is a syntax used in React to write HTML-like code inside JavaScript. It makes UI code easier to read and write.

### 2. What are Props?

Props are used to pass data from a parent component to a child component.

### 3. What is State?

State is data that can change during the lifetime of a React component. I used `useState` to manage technologies, stack items, loading, and error states.

### 4. What is useState?

`useState` is a React Hook used to create and manage state inside a functional component.

### 5. What is useEffect?

`useEffect` is used to perform side effects in React. I used it to fetch technology data from the JSON file when the application loads.

### 6. What are Keys?

Keys help React identify individual elements when rendering a list. I used the technology `id` as the key.

### 7. What is Conditional Rendering?

Conditional rendering means showing different UI based on a condition. For example, I show a loading screen while data is loading and an empty-stack message when no technology is selected.

### 8. How does Parent-Child Communication work?

A parent component can send data or functions to a child component using props. In this project, `App.jsx` sends technology data and the `onAddToStack` function to `TechnologyCard`.