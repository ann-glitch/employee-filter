import React from "react";

const EmployeeForm = ({
  handleSubmit,
  noofRecords,
  idStarts,
  setNoofRecords,
  setIdStarts,
}) => {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center lg:flex-row md:flex-row flex-col lg:gap-3 md:gap-2">
        <label htmlFor="noofRecords">Number of Records:</label>
        <input
          type="number"
          id="noofRecords"
          name="noofRecords"
          value={noofRecords}
          onChange={(e) => setNoofRecords(e.target.value)}
        />
        <label htmlFor="idStarts">Starting ID:</label>
        <input
          type="number"
          id="idStarts"
          name="idStarts"
          value={idStarts}
          onChange={(e) => setIdStarts(e.target.value)}
        />
      </form>
    </div>
  );
};

export default EmployeeForm;
