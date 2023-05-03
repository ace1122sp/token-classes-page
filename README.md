## React App - Dashboard with Table and Login

## Description

This is a React app that features a simple page of cards with data populated from an API service. The state management is currently done only with hooks, but it can be easily refactored to use Redux (installed for eventual use). The app utilizes TypeScript for type checking. A possible alternative for this purpose could be PropTypes npm package.

## Installation

To install the app, clone this repository and run npm install.

```
git clone https://github.com/ace1122sp/token-classes-page.git
```

```
cd token-classes-page
```

```
npm install
```

### Environment Variables

The following environment variable is required to run the app:

`REACT_APP_API_URL: The URL of the api service to fetch the token classes data. Example value: http://localhost:3002`

## Usage

To start the app, run npm start. The app will be served at http://localhost:3000 by default.

```
npm start
```

## Acknowledgements

This app was built using Create React App, TypeScript template with support for redux state management.

## Improvements & Future Work

1 - implement Redux for state management as the app grows in complexity with new features.
This will make the app more scalable and easier to maintain and it will bring the following benefits: - a single source of truth for the state - easier debugging - easier to test - better performance - better code organization

2 - add unit tests for the components
This will make the app more robust and easier to maintain and it will bring the following benefits:

3 - To improve the current version of the app we could:

- add a `Valuation Method` page and make it accessible with already present `Valuation Method` button.
- add handlers to cards' CTAs to make them functional
- refactor `Card` component further by destructuring it into smaller components which could be reused in other parts of the app
- initialize more robust styling system with more variables and mixins (would need to be discussed with the designer)
