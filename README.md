# Dev Stack Builder

Dev Stack Builder is a simple React project where users can explore some popular web development technologies and build their own technology stack.

I made this project to practice React concepts like components, props, state, useEffect, JSON data, and event handling.

## Technologies Used

* React
* JavaScript
* Tailwind CSS
* React Toastify
* JSON
* Vite

## Main Features

1. Users can see different technologies with their name, category, description, rating, and difficulty level.

2. Users can add a technology to their own stack. The same technology cannot be added more than once.

3. Users can remove a technology from the stack or remove all selected technologies at once.

## React Concepts

### 1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript. I used JSX in this project to create the UI of my React components. It makes the code easier for me to understand.

### 2. What is the difference between Props and State?

Props are used to send data from a parent component to a child component. State is used to store data that can change in a component.

### 3. What does the useState hook do?

`useState` is a React Hook that helps us create and change state in a component.

I used `useState` in my project to manage the technology list, selected stack, and loading state.

### 4. What does the useEffect hook do?

`useEffect` is used when we need to perform something after a component renders.

I used `useEffect` to load the technology data from my JSON file when the website starts.

### 5. Why does every item in a .map() list need a unique key?

React needs a unique key to identify each item in a list. It helps React understand which item has changed, added, or removed.

In my project, I used the technology `id` as the key.

### 6. What is Conditional Rendering?

Conditional rendering means showing something based on a condition.

For example, when no technology is added, I show an empty stack message. When technologies are added, I show the selected technologies instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can send data or a function to a child component using props.

In my project, `App.jsx` sends technology data and the `onAddToStack` function to the `TechnologyCard` component.

The child component can call the function received through props when the user clicks the **Add to Stack** button.

