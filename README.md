# Employee Filter App.

This is a simple React web application that enables users to filter employee data based on the number of records and the starting ID. It fetches data from a dummy API and displays the filtered employee list.

## Features

- Filter employees by specifying the number of records to display.
- Filter employees by setting the starting ID to begin displaying records.
- Real-time filtering without page refresh.
- Error handling for API calls and user input.

## Demo

You can check out the live demo of the Employee Filter Application [here](https://employee-filter.vercel.app).

## Installation

To run the application locally, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.
2. Clone this repository to your local machine using `git clone`.
3. Navigate to the project directory: `cd employee-filter`.
4. Install the required dependencies: `yarn`.

## Usage

1. Run the application locally: `yarn start` and the app should now be running on `http://localhost:3000`
2. Use the input fields to set the number of records and the starting ID.
3. The application will fetch data from the dummy API and display the filtered results in real-time.

## Technologies Used

- React: JavaScript library for building user interfaces.
- Axios: Promise-based HTTP client for making API requests.
- TailwindCSS: Utility-first CSS framework for rapid UI development.
- Jest and Testing Library: For unit testing the components.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.
