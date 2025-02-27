# Currency Exchange Rates Application

This application displays exchange rates for different currencies against the Polish Zloty (PLN). It is built using React.js, TypeScript, and Vite as the build tool. The app fetches currency data from the free API `https://frankfurter.dev/`. Unfortunately, it does not return rates from the weekend, it is updated every day on weekdays around 16:00 CET

## Features

The application consists of two main sections:

1. **List of Exchange Rates Against PLN**:
   - The first column shows exchange rates for various currencies against the Polish Zloty (PLN).
   - The user can select any currency to view its detailed history.

2. **Currency History**:
   - After selecting a currency from the first column, the second column displays the exchange rates for that currency from today to the Monday of the previous week.

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that provides static types.
- **Vite**: Next-generation build tool that provides fast development and build times.
- **Material-UI**: A popular React UI framework for building modern and responsive interfaces.
- **Redux Toolkit Query**: For state management and API interactions.
- **Vitest**: A testing framework for running unit and integration tests.

## Tests

The application has been tested using the following tools:

- **Vitest** – a framework for unit and integration tests.
- **MSW (Mock Service Worker)** – for mocking API queries in tests.
- **@testing-library/jest-dom** – a set of matchers for testing DOM elements.
- **@testing-library/react** – React component testing tool.

To run the tests, use the following command:

```sh
npx vitest
```

## Live Demo

You can view a live demo of the application here: [(https://currency-rate-app-pi.vercel.app/)](https://currency-rate-app-pi.vercel.app/)
