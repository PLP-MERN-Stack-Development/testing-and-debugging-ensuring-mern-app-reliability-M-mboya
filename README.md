Testing and Debugging: Ensuring MERN App Reliability
# Testing and Debugging: Ensuring MERN App Reliability

## Project Overview
This project demonstrates testing and debugging techniques for a MERN stack backend server using **Jest** and **Supertest**.  
It ensures that the API endpoints and core server logic work as expected.

---

Project Structure
testing-and-debugging-ensuring-mern-app-reliability-M-mboya/
├── client/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── server/
│   ├── index.js
│   ├── package.json
│   ├── jest.config.js
│   ├── src/
│   │   ├── app.js
│   │   ├── routes/
│   │   └── models/
│   ├── tests/
│   │   ├── unit/
│   │   │   └── app.test.js
│   │   └── integration/
│   │       └── posts.test.js
│   └── README.md
│
└── test-results.png     # Screenshot showing successful Jest tests


## 🧪 Testing

### Run Tests
```bash
npm test

Example Output
Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total

🧰 Technologies Used

Node.js

Express.js

Jest

Supertest

 What Was Tested

Unit Test: Verifies the server root route (/) responds successfully.

Integration Test: Verifies the /posts endpoint works and returns the correct status.

 Debugging

Throughout the development:

Fixed missing exports and incorrect paths.

Resolved Cannot find module and 404 errors.

Handled Jest async teardown warning.

 Result

All test cases passed successfully.

A screenshot of the passing test results: c:\Users\user\OneDrive\Pictures\Screenshots\Screenshot 2025-11-07 124441.png

Author

Michael Mboya
MERN Stack Developer
 michaelkam65@gmail.com