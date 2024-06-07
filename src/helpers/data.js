import Employee from "./Employee";

// Creating the organizational structure

export const ceo = new Employee("Raj", "CEO", 300000);
export const cto = new Employee("Jay", "CTO", 250000);
export const vpEng = new Employee("Vinu", "VP of Engineering", 200000);
export const vpSales = new Employee("Anaya", "VP of Sales", 200000);

export const directorEng = new Employee(
  "Dave",
  "Director of Engineering",
  150000
);
export const directorSales = new Employee(
  "Avidan",
  "Director of Sales",
  150000
);

export const managerEng = new Employee("Laxmi", "Engineering Manager", 100000);
export const managerSales = new Employee("Aarthi", "Sales Manager", 100000);

export const engineer1 = new Employee("Vipul", "Engineer", 90000);
export const salesRep1 = new Employee("Sony", "Sales Representative", 80000);
export const engineer2 = new Employee("Rahul", "Engineer", 90000);
export const salesRep2 = new Employee("Harsha", "Sales Representative", 80000);

// Construct the hierarchy
ceo.addDirectReport(cto);
cto.addDirectReport(vpEng);
cto.addDirectReport(vpSales);

vpEng.addDirectReport(directorEng);
vpSales.addDirectReport(directorSales);

directorEng.addDirectReport(managerEng);
directorSales.addDirectReport(managerSales);
managerEng.addDirectReport(engineer1);
managerSales.addDirectReport(salesRep1);
managerEng.addDirectReport(engineer2);
managerSales.addDirectReport(salesRep2);

// src/data.js
export const orgData = {
  name: "Raj",
  role: "CEO",
  children: [
    {
      name: "Jay",
      role: "CTO",

      children: [
        {
          name: "Vinu",
          role: "VP of Engineering",
          children: [
            {
              name: "Dave",
              role: "Director of Engineering",
              children: [
                {
                  name: "Laxmi",
                  role: "Engineering Manager",
                  children: [
                    { name: "Vipul", role: "Engineer", children: [] },
                    { name: "Rahul", role: "Engineer", children: [] },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Anaya",
          role: "VP of Sales",
          children: [
            {
              name: "Avidan",
              role: "Director of Sales",
              children: [
                {
                  name: "aarthi",
                  role: "Sales Manager",
                  children: [
                    {
                      name: "Sony",
                      role: "Sales Representative",
                      children: [],
                    },
                    {
                      name: "Harsha",
                      role: "Sales Representative",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
