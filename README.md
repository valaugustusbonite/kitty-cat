# Kitty Cat (IONA evaluation)

A frontend system that displays images of cats based on breed selected. 

This project was bootstrapped with [Vite](https://vitejs.dev/), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Table of  Contents
* [Getting Started](#getting-started)
* [Project Structure](#folder-structure)
* [Git Workflow](#git-workflow)
* [Commit Message](#commit-message)
* [Components and Styling](#components-and-styling)
* [Style Guide](#style-guide)
* [Error Handling](#error-handling)
* [Quick Demo](#quick-demo)

# Getting Started

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`

Will search for code problems, but will not fix it.

### `npm run lint:fix`

Will search for code problems, and will try to fix it.

### `npm run format`

Will call prettier to fix the code style.

## Learn More

To learn React, check out the [React documentation](https://reactjs.dev/).

# Project Structure

```
    |-- public
    |-- src
    |    |-- App.css
    |    |-- App.tsx
    |    |-- assets                         # Project assets
    |    |-- config                         # Env values
    |    |-- lib                            # Common configs for used libraries like Axios
    |    |-- common                                             
    |    |   |-- components                 # Reusable components
    |    |   |-- types                      # Reusable types
    |    |   └-- exception                  # Reusable fallback components
    |    |-- feature(module)                        
    |    |   └-- feature_name               # Feature/module of a specific feature
    |    |         |-- api                  # Api logic needed for that module
    |    |         |-- components           # Components used in that feature module
    |    |         |-- types                # Types used in the feature module
    |    |         └-- slices               # Redux slices used in the feature module
    |    |-- hooks                          # Reusable hooks
    |    |-- providers                      # App wrappers / context or config providers
    |    |-- routes                         # Routing config
    |    |-- store                          # Redux store
    |    |-- styles                         # Global style configs
    |    └-- vite-env.d.ts
    |
    |-- tsconfig.json
    |-- tsconfig.node.json
    |-- vite.config.ts
    |-- .env.example                        # .env content
    |-- .eslintrc.json
    |-- .gitignore
    |-- .prettierrc
    |-- declaration.d.ts
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- vite.svg
    └-- settings.json
```

# Git Workflow

### Feature

1. Checkout from `main` to get the latest codebase
2. Create feature branch ie. `feature/name-of-feature`
3. Ready to merge your changes? Create a Merge Request to `main` branch

### Enhancement / Update

1. Checkout from `main` to get the latest codebase
2. Create feature branch ie. `enhancement/name-of-feature`
3. Ready to merge your changes? Create a Merge Request to `main` branch

### Bugfix / Hotfix

1. Checkout from `main` to get the latest codebase
2. Create `bugfix` branch ie. `bugfix/name-of-feature`
3. Ready to merge your changes? Create a Merge Request to `main` branch


# Commit Message

https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/

# Components and Styling

### Colocate things as close as possible to where it's being used

- Keep components, functions, styles, state, etc. as close as possible to the component where it's being used. This will not only make your codebase more readable and easier to understand but it will also improve your application performance since it will reduce redundant re-renders on state updates.

### Avoid large components with nested rendering functions

- Do not add multiple rendering functions inside your application, this gets out of control pretty quickly. What you should do instead is if there is a piece of UI that can be considered as a unit, is to extract it in a separate component.

```javascript
// this is very difficult to maintain as soon as the component starts growing
function Component() {
  function renderItems() {
    return <ul>...</ul>;
  }
  return <div>{renderItems()}</div>;
}

// extract it in a separate component
function Items() {
  return <ul>...</ul>;
}

function Component() {
  return (
    <div>
      <Items />
    </div>
  );
}
```

### Stay consistent

- Keep your code style consistent. e.g If you name your components by using pascal case, do it everywhere. More on this can be found [here](#style-guide)

#### Limit the number of props a component is accepting as input

If your component is accepting too many props you might consider splitting it into multiple components or use the composition technique via children or slots.

[Composition Example Code](../src/components/Elements/ConfirmationDialog/ConfirmationDialog.tsx)

## Component libraries

This project is currently using Chakra UI as its component library and CSS modules with SASS for custom styling.

- [Chakra UI](https://chakra-ui.com/)
- [SASS](https://sass-lang.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)

# Style Guide

When you work with large projects, it's important that you remain consistent throughout the codebase and follow the best practices. To guarantee the quality of your codebase, you need to analyze different levels of the applications code.

## Clean Code

This is the most abstract level of code standardization. It's related to the implementations independent of the programming language. It will help the readability of your code.

[Clean Code Javascript](https://github.com/ryanmcdermott/clean-code-javascript)

### Naming

One of the most important points of the Clean Code is how you name your functions, variables, components, etc. Use this amazing guide to understand how to write better variable names.

[Naming Cheatsheet](https://github.com/kettanaito/naming-cheatsheet)

# Error Handling

### API Errors

Set up an interceptor for handling errors. You can use it to fire a notification toast to notify users that something went wrong, log out unauthorized users, or send new requests for refreshing tokens.

### In App Errors

Use error boundaries to handle errors that happen in the React tree. It is very popular to set only 1 single error boundary for the entire application, which would break the entire application when an error occurs. That's why you should have more error boundaries on more specific parts of the application. That way if an error occurs the app will still work without the need to restart it.

[Error Boundary Example Code](./src/providers/AppProvider.tsx)

### Error Tracking

You should track any errors that occur in production. Although it's possible to implement your own solution, it is a better idea to use tools like [Sentry](https://sentry.io/). It will report any issue that breaks the app. You will also be able to see on which platform, browser, etc. did it occur. Make sure to upload source maps to sentry to see where in your source code did the error happen.

# Quick Demo

## Infinite Scroll (Desktop)

![Alt text](./src/assets/infinite-scroll.gif)

## Infinite Scroll (Mobile)

![Alt text](./src/assets/infinite-scroll-mobile.gif)

## View Details (Desktop)

![Alt text](./src/assets/view-details-web.gif)

## View Details (Mobile)

![Alt text](./src/assets/view-details-mobile.gif)

