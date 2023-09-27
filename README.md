# LOG DIGESTION

This project is designed to process and analyze log data from multiple log files, extracting valuable information such as API endpoints, API call frequency per minute, and status code counts. You can follow these steps to run the code and analyze your log data.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/): The JavaScript runtime used to execute the code.

## Getting Started

1. **Clone the Repository:**

   ```
   git clone <repository_url>
   ```

   Replace `<repository_url>` with the URL of your GitHub repository.

2. **Navigate to the 'src' Directory:**

   ```
   cd src
   ```

3. **Install Dependencies:**

   Use the following command to install the required Node.js dependencies specified in the `package.json` file:

   ```
   npm install
   ```

## Running the Code

Once you have the project set up and dependencies installed, you can run the code to process and analyze your log data.

1. **Run the Code:**

   Execute the following command to run the code:

   ```
   node index
   ```

   This will execute the JavaScript code in the `index.js` file, which reads and processes your log files.

2. **View the Results:**

   The code will display the following results in tables:

   - **Endpoint Counts:** Shows the count of each API endpoint.
   - **API Calls Per Minute:** Displays the frequency of API calls per minute.
   - **Status Code Counts:** Provides counts for each HTTP status code encountered in the logs.

## Customization

You can customize this code to work with your specific log data by modifying the list of log file paths in the `logFiles` array located in the `index.js` file. Simply update the file paths to match the log files you want to analyze.

## Contributing

If you'd like to contribute to this project or have suggestions for improvements, feel free to create issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it according to the terms of the license.

---

By following these steps, you can easily process and analyze your log data using this project. If you encounter any issues or have questions, please don't hesitate to reach out or create an issue on GitHub. Happy log analysis!
