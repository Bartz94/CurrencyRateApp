# Currency Exchange Rates Application

This application displays exchange rates for different currencies against the Polish Zloty (PLN). It is built using React.js, TypeScript, and Vite as the build tool. The app fetches currency data from the free API `https://frankfurter.dev/`. Unfortunately, it does not return rates from the weekend, it is updated every day on weekdays around 16:00 CET

## Features

The application consists of two main sections:

1. **List of Exchange Rates Against PLN**:
   - The first column shows exchange rates for various currencies against the Polish Zloty (PLN).
   - The user can select any currency to view its detailed history.

2. **Currency History**:
   - After selecting a currency from the first column, the second column displays the exchange rates for that currency from today to the Monday of the previous week.

## Installation
Clone the repository:

```bash
git clone https://github.com/your-username/currency-exchange-app.git
```
Go to the project directory:

```bash
cd currency-exchange-app
```

Run the development server:
```bash
npm run dev
```

## Technologies Used

- **React.js**: JavaScript library for building user interfaces. 
- **TypeScript**: A superset of JavaScript that provides static types.
- **Vite**: Next-generation build tool that provides fast development and build times.
- **Material-UI**: A popular React UI framework for building modern and responsive interfaces.
- **Redux Toolkit Query**: For state management and API interactions.
- **Vitest**: A testing framework for running unit and integration tests.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Material UI](https://img.shields.io/badge/Material_UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
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
