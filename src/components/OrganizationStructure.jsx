import OrgTree from "./OrgTree";
import { orgData } from "../helpers/data.js";
//Displays Organization Chart
const OrganizationStructure = () => {
  return (
    <div>
      <h1 className="text-blue-600 text-3xl font-bold mb-6 text-center mt-8">
        Organizational Chart
      </h1>
      <OrgTree data={orgData} />
    </div>
  );
};

export default OrganizationStructure;
