# Blueprint

## Overview

This project is a simple web application that demonstrates modern web development techniques and Firebase integration.

## Project Details

### Style and Design
- **Button:** A dynamic button with a blue base color, a darker blue hover color, and a glowing shadow effect. It has a subtle 3D effect on hover and a pressed effect on click. The font is bold and clean.
- **Layout:** The main content container (`#app-container`) will use flexbox to position the heading at the top and the button at the bottom, centered horizontally.
- **Background:** The body will have a modern, soft pastel blue background color.

### Features
- A button with the text "INICIAR".
- A console log message when the button is pressed.

## Current Request

The user wants to implement a basic JavaScript click handler for the "INICIAR" button.

### Plan
1.  **Update `blueprint.md`:** Add the detail about implementing the button's click handler to the blueprint. (Completed)
2.  **Modify `public/js/main.js`:**
    *   Wrap the code in a `DOMContentLoaded` listener.
    *   Get a reference to the button using `document.getElementById('startButton')`.
    *   Add a click event listener to the button.
    *   Inside the listener, add `console.log('Botón INICIAR clicado!');`.
