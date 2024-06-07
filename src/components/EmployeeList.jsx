import { useState, useEffect } from "react";

/*
EmployeeList component efficiently manages and displays the list of employees
under a manager. It allows real time salary updates throgh controlled input field and state component.
*/
const EmployeeList = ({ manager, updateSalary }) => {
  const [salaries, setSalaries] = useState({});

  useEffect(() => {
    const initialSalaries = manager.directReports.reduce((acc, emp) => {
      acc[emp.name] = emp.salary;
      return acc;
    }, {});
    setSalaries(initialSalaries);
  }, [manager]);
  console.log(salaries);
  const handleSalaryChange = (name, newSalary) => {
    setSalaries((prevSalaries) => ({
      ...prevSalaries,
      [name]: newSalary,
    }));
    updateSalary(name, newSalary);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">
        Employees reporting to {manager.name}
      </h2>
      <ul>
        {manager.directReports.map((employee) => (
          <li
            key={employee.name}
            className="py-2 flex items-center justify-between border-b border-gray-300"
          >
            <div>
              <p className="text-gray-800 font-semibold">{employee.name}</p>
              <p className="text-gray-500">{employee.role}</p>
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">$</span>
              <input
                className="w-28 px-2 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                type="number"
                value={salaries[employee.name]}
                onChange={(e) =>
                  handleSalaryChange(employee.name, Number(e.target.value))
                }
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
