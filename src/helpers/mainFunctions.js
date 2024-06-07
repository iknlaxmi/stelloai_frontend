//Search through an organizational hierarchy to find an employee by name.
//It returns the employee object if found otherwise 'null.
export function findEmployeeByName(root, name) {
  if (!root) return null;
  if (root.name === name) return root;

  for (let report of root.directReports) {
    const employee = findEmployeeByName(report, name);
    if (employee) return employee;
  }

  return null;
}

//Retrieves all managers from an organizational hierarchy and returns them in a flat array.
export const getAllManagers = (root) => {
  if (!root) return [];
  let managers = [root];
  for (let report of root.directReports) {
    managers = managers.concat(getAllManagers(report));
  }
  return managers;
};
