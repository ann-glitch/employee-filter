import React, { useState, useEffect } from "react";
import axios from "axios";

import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [noofRecords, setNoofRecords] = useState("");
  const [idStarts, setIdStarts] = useState("");
  const [employeeData, setEmployeeData] = useState([]);

  // fetch employee data based on user input
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        `https://hub.dummyapis.com/employee?noofRecords=${noofRecords}&idStarts=${idStarts}`
      );
      // Check if the response has the 'data' property
      if (response.data) {
        setEmployeeData(response.data);
      }
    } catch (err) {
      console.log("Error fetching data:", err);
      alert("Error fetching data");
    }
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchEmployees();
  };

  // fetch data on component mount and whenever the user input changes
  useEffect(() => {
    fetchEmployees();
    // save user input to local storage
    localStorage.setItem(
      "employeeFilterData",
      JSON.stringify({ noofRecords, idStarts })
    );
  }, [noofRecords, idStarts]);

  // retrieve user input from local storage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("employeeFilterData"));
    if (savedData) {
      setNoofRecords(savedData.noofRecords);
      setIdStarts(savedData.idStarts);
    }
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold py-6 text-2xl">Employee Filter</h1>
      <EmployeeForm
        handleSubmit={handleSubmit}
        noofRecords={noofRecords}
        idStarts={idStarts}
        setNoofRecords={setNoofRecords}
        setIdStarts={setIdStarts}
      />
      <EmployeeList employeeData={employeeData} />
    </div>
  );
}

export default App;
