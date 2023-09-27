"use strict";

// Import required modules
const fs = require("fs");
const path = require("path");

// Define the directory containing log files
const logsDirectory = path.join(__dirname, "data");

// Read data from a file and split it into log entries
function readDataFromFile(filePath) {
    const logs = fs.readFileSync(filePath, "utf-8");
    const logData = logs.split("\n");
    return logData;
}

// Process log data from multiple log files
function processLogData(logFiles) {
    let allLogEntries = [];

    logFiles.forEach((logFile) => {
        const logFilePath = path.join(logsDirectory, logFile);
        const logEntries = readDataFromFile(logFilePath);
        allLogEntries = [...allLogEntries, ...logEntries];
    });

    return allLogEntries;
}

// Extract API endpoint from a log entry using regular expression
function getApiEndpointFromLog(logEntry) {
    const regex = /"GET\s+([^"\s]+)\s+HTTP\/\d\.\d"/;
    const match = logEntry.match(regex);
    return match ? match[1] : null;
}

// Count how many times API endpoints are called using a map
function countAPIEndpointCalls(logEntries) {
    const endpointCounts = new Map();

    logEntries.forEach((entry) => {
        const endpoint = getApiEndpointFromLog(entry);
        if (endpoint) {
            endpointCounts.set(endpoint, (endpointCounts.get(endpoint) || 0) + 1);
        }
    });

    return endpointCounts;
}

// Count API calls per minute based on date and time
function countAPICallsPerMinute(logEntries) {
    const apiCallsPerMinute = new Map();

    logEntries.forEach((entry) => {
        const [date, min] = entry.split(" ");
        const timestamp = date + "-" + min;

        if (!isNaN(new Date(date)) && entry.includes('HTTP/1.1"')) {
            apiCallsPerMinute.set(
                timestamp,
                (apiCallsPerMinute.get(timestamp) || 0) + 1
            );
        }
    });

    return apiCallsPerMinute;
}

// Count the number of API calls according to status code
function countAPICallsByStatusCode(logEntries) {
    const statusCodeCounts = new Map();

    logEntries.forEach((entry) => {
        const statusCodePattern = /" (\d{3}) /;
        const matches = entry.match(statusCodePattern);

        if (matches && matches.length > 1) {
            const statusCode = matches[1];
            statusCodeCounts.set(
                statusCode,
                (statusCodeCounts.get(statusCode) || 0) + 1
            );
        }
    });

    return statusCodeCounts;
}

// Define the array of log file paths
const logFiles = [
    "../data/api_calls_data1.log",
    "../data/api_calls_data2.log",
    "../data/api_calls_data3.log",
];

// Process the log data
const logEntries = processLogData(logFiles);
const endpointCounts = countAPIEndpointCalls(logEntries);
const apiCallsPerMinute = countAPICallsPerMinute(logEntries);
const statusCodeCounts = countAPICallsByStatusCode(logEntries);

// Display the final data in tables
console.log("Endpoint Counts:");
console.table(Array.from(endpointCounts.entries()));
console.log("\nAPI Calls Per Minute:");
console.table(Array.from(apiCallsPerMinute.entries()));
console.log("\nStatus Code Counts:");
console.table(Array.from(statusCodeCounts.entries()));
