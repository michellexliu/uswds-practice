# USWDS Practice

## Background

This is a website built to explore the [U.S. Web Design System (USWDS)](https://github.com/michellexliu/uswds-practice.git) and [react-uswds](https://github.com/michellexliu/uswds-practice.git), built as part of an internship at the NYC Mayor's Office of the CTO (MOCTO).

### Goals

- Learn how to work with USWDS and react-uswds components to build accessible, mobile-friendly government websites.
- Learn how to set up internationalization to create websites accessible in multiple languages.
- Learn how to implement and set up routes for switching between languages.
- Practicing proper web development practices by giving and receiving feedback between peers.

## Getting Started

### Install

To clone this project, run:\
`git clone https://github.com/michellexliu/uswds-practice.git && cd uswds-practice`

Install any necessary dependencies with npm:\
`npm install`

Run the project:
`npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Adding Languages for Internationalization

1. Create a new folder in `src/translations`, named with your desired language code (e.g. `src/translations/ja`).
2. Duplicate the file `src/translations/en/translations.js` and move it to your newly created folder.
3. Change the strings for each property to the translated versions in your new language.
4. Import the new file at the top of your `i18n.js` file (e.g. `import { TRANSLATIONS_JA } from "./ja/translations";`).
5. Add the new language in the `resources` of your `i18n.js` file.
