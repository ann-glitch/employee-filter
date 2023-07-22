import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EmployeeList from "./EmployeeList";

describe("EmployeeList", () => {
  it("renders the EmployeeList component with employee data", () => {
    const employeeData = [
      {
        id: 1,
        imageUrl: "https://dummyimage.com/200x200",
        lastName: "Doe",
        address: "123 Main St",
        salary: 50000,
      },
    ];

    render(<EmployeeList employeeData={employeeData} />);

    expect(screen.getByText("Index: 0")).toBeInTheDocument();
    expect(screen.getByAltText("Doe")).toBeInTheDocument();
    expect(screen.getByText("Last Name: Doe")).toBeInTheDocument();
    expect(screen.getByText("Address: 123 Main St")).toBeInTheDocument();
    expect(screen.getByText("Salary: 50000")).toBeInTheDocument();
  });

  it("renders the EmployeeList component with no employee data", () => {
    const employeeData = []; // Empty array

    render(<EmployeeList employeeData={employeeData} />);

    expect(screen.queryByText("Index:")).not.toBeInTheDocument();
    expect(screen.queryByAltText("")).not.toBeInTheDocument();
    expect(screen.queryByText("Last Name:")).not.toBeInTheDocument();
    expect(screen.queryByText("Address:")).not.toBeInTheDocument();
    expect(screen.queryByText("Salary:")).not.toBeInTheDocument();
  });
});
