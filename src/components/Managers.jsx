import { useState } from "react";

import {
  findEmployeeByName,
  getAllManagers,
} from "../helpers/mainFunctions.js";

import { ceo } from "../helpers/data.js";
import EmployeeList from "./EmployeeList.jsx";
/**
 *
 * Description:
 * Managers Component provides an interactive interface for selecting managers,
 * viewing their direct report, and updating their salaries while tracking total budget changes.
 */
function Managers() {
  const [selectedManager, setSelectedManager] = useState(ceo);
  const [totalBudgetChange, setTotalBudgetChange] = useState(0);

  const updateSalary = (name, newSalary) => {
    const employee = findEmployeeByName(ceo, name);
    const oldSalary = employee.salary;
    employee.salary = newSalary;

    const salaryChange = newSalary - oldSalary;
    setTotalBudgetChange((prevChange) => prevChange + salaryChange);
  };
  const handleManagerChange = (event) => {
    const managerName = event.target.value;
    const manager = findEmployeeByName(ceo, managerName);

    setSelectedManager(manager);
  };
  const managers = getAllManagers(ceo);
  return (
    <>
      <div className="mt-16 m-8">
        <h1 className="text-blue-600 text-3xl font-bold mb-12 text-center mt-8">
          Managers & Salaries
        </h1>
        <label htmlFor="manager-select" className="text-xl font-semibold ml-6">
          Select a manager{" "}
        </label>
        <select
          id="manager-select"
          className="border-blue-600 border-2 rounded w-64 h-10 ml-20"
          onChange={handleManagerChange}
          value={selectedManager.name}
        >
          {managers.map((manager) => (
            <option key={manager.name} value={manager.name}>
              {manager.name} - {manager.role}
            </option>
          ))}
        </select>
        <EmployeeList manager={selectedManager} updateSalary={updateSalary} />
        <p className="mt-8 font-bold text-xl text-blue-600">
          Total Budget Change: ${totalBudgetChange}
        </p>
      </div>
    </>
  );
}

export default Managers;
