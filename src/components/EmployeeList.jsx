import React from "react";

const EmployeeList = ({ employeeData }) => {
  return (
    <div className="mt-8 ml-6 grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      {employeeData.map((employee, index) => (
        <div key={employee.id}>
          <p>Index: {index}</p>
          <img
            src={employee.imageUrl}
            alt={employee.lastName}
            className="rounded-xl object-cover"
          />
          <p className="mt-2">Last Name: {employee.lastName}</p>
          <p>Address: {employee.address}</p>
          <p>Salary: {employee.salary}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
