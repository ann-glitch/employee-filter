import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import App from "./App";

jest.mock("axios");

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
    expect(screen.getByText("Employee Filter")).toBeInTheDocument();
  });

  it("fetches and displays employee data on form submission", async () => {
    const mockData = [
      {
        id: 1,
        imageUrl: "https://dummyimage.com/200x200",
        lastName: "Doe",
        address: "123 Main St",
        salary: 50000,
      },
    ];

    axios.get.mockResolvedValueOnce({ data: mockData });

    render(<App />);

    const numberOfRecordsInput = screen.getByLabelText("Number of Records:");
    const startingIdInput = screen.getByLabelText("Starting ID:");
    const filterButton = screen.getByText(/Filter/i); // case-insensitive matching

    fireEvent.change(numberOfRecordsInput, { target: { value: "10" } });
    fireEvent.change(startingIdInput, { target: { value: "1" } });
    fireEvent.click(filterButton);

    await waitFor(() => {
      expect(screen.getByText("Last Name: Doe")).toBeInTheDocument();
    });
    expect(screen.getByText("Address: 123 Main St")).toBeInTheDocument();
    expect(screen.getByText("Salary: 50000")).toBeInTheDocument();
  });

  it("displays an error message when the API call fails", async () => {
    axios.get.mockRejectedValueOnce(new Error("Network Error"));

    // Mock window.alert
    const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<App />);

    const numberOfRecordsInput = screen.getByLabelText("Number of Records:");
    const startingIdInput = screen.getByLabelText("Starting ID:");
    const filterButton = screen.getByText(/Filter/i); // case-insensitive matching

    fireEvent.change(numberOfRecordsInput, { target: { value: "10" } });
    fireEvent.change(startingIdInput, { target: { value: "1" } });
    fireEvent.click(filterButton);

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith("Error fetching data");
    });

    // Restore the original window.alert
    mockAlert.mockRestore();
  });
});
