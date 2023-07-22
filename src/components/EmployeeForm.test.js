import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EmployeeForm from "./EmployeeForm";

describe("EmployeeForm", () => {
  it("renders the EmployeeForm component", () => {
    render(<EmployeeForm />);
    expect(screen.getByLabelText("Number of Records:")).toBeInTheDocument();
    expect(screen.getByLabelText("Starting ID:")).toBeInTheDocument();
  });

  it("updates state when input values change", () => {
    const setNoofRecords = jest.fn();
    const setIdStarts = jest.fn();

    render(
      <EmployeeForm
        handleSubmit={() => {}}
        noofRecords=""
        idStarts=""
        setNoofRecords={setNoofRecords}
        setIdStarts={setIdStarts}
      />
    );

    const numberOfRecordsInput = screen.getByLabelText("Number of Records:");
    const startingIdInput = screen.getByLabelText("Starting ID:");

    fireEvent.change(numberOfRecordsInput, { target: { value: "10" } });
    fireEvent.change(startingIdInput, { target: { value: "1" } });

    expect(setNoofRecords).toHaveBeenCalledTimes(1);
    expect(setIdStarts).toHaveBeenCalledTimes(1);
    expect(setNoofRecords).toHaveBeenCalledWith("10");
    expect(setIdStarts).toHaveBeenCalledWith("1");
  });
});
