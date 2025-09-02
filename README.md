# Curse Word Keeper

This is a small fullstack Next.js app with End-to-End testing. I've built this app to help people keep track of their curse words. I've also utilized a bad-words filter to make sure the words that gets added are actual curse words

The project is tested with Cypress E2E tests, including both success and failure cases.

## User flows
Flow 1. Input curse word -> press "add" -> curse word gets saved to database  
Flow 2: User wants to remove a word -> finds and presses "remove" button -> word gets removed from database  
Flow 3: User inputs a word that isn't a curse word -> App responds with an error message

## Features
- Add a new curse word
- Delete curse words
- Data stored in a Prisma + SQLite database
- Automated E2E tests with Cypress
- Reset/seed database endpoint for consistent test runs

## Tech Stack
- Next.js (App Router)
- Prisma (SQLite)
- Cypress

## Installation
Clone the repo and install dependencies:

```bash
git clone https://github.com/ragnargulin/CurseWordKeeper
cd cursewordkeeper
npm install
```
### Running the App

Start the development server:

```bash
npm run dev
```

The app will be available at http://localhost:3000

### Running Tests

First, start the dev server in one terminal:

```bash
npm run dev
```

Then, in another terminal, open Cypress:

```bash
npx cypress open
```

This will launch the Cypress test runner, where you can run all tests.
Database is reset before each test using a custom /api/flush endpoint.


## Reflection

During this assignment, I learned how to combine a simple fullstack app with automated E2E testing. One key challenge was ensuring consistent test data, which I solved by creating a custom `/api/test/flush` endpoint that resets and seeds the database before each test. This allowed my Cypress tests to be reliable and repeatable.  

Another lesson was how important it is to cover both successful and failing user flows. For example, my tests not only check that words can be added and deleted but also verify error cases when invalid input is submitted.  

Compared to the previous unit/integration assignment, I found this project gave me a better understanding of how frontend and backend must work together, and how Cypress can act as a “real user” clicking through the app. In real projects, this approach is useful for catching bugs that only appear in full user journeys, not in isolated unit tests.  