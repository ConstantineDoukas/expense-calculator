# Expense Calculator

This is a simple web application that calculates total expenses from user input.

## Features

-   Parses user-provided text input to extract expense items and amounts.
-   Calculates the total expenses.
-   Formats the total as currency (USD).
-   Provides a basic HTML interface to input expenses.

## Getting Started

### Prerequisites

-   Node.js and npm installed.

### Installation

1.  Clone the repository:

    ```bash
    git clone [your-repository-url]
    cd [repository-directory]
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

### Running the Application

1.  Start the server:

    ```bash
    node server.js
    ```

2.  Open your web browser and navigate to `http://localhost:3000`.

### Usage

1.  Enter your expenses in the text area. Each expense item should be on a new line, followed by the amount on the next line.
2.  Click the "Calculate" button.
3.  The total expenses will be displayed below the button.

### Example Input

Groceries
50.00
Gas
30.50
Rent
1200

### Technologies Used

-   Node.js
-   Express.js
-   Body-parser

### Contributing

Feel free to submit pull requests to improve the application.

### License

MIT License

Copyright (c) 2025 Constantine Doukas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.