// A recursive component that represents a single node in the organizational tree,
//rendering its details and any children it has.
const OrgTreeNode = ({ node }) => {
  return (
    <div className="ml-4 border-l-2 border-gray-400 pl-4 relative">
      <div className="flex items-center mb-2">
        <div className="w-2.5 h-2.5 bg-gray-400 rounded-full absolute -left-1.5"></div>
        <div className="p-2 bg-white border rounded shadow-sm">
          <span className="font-semibold text-blue-600">{node.name}</span> -{" "}
          <span className="text-gray-600">{node.role}</span>
        </div>
      </div>
      {node.children && node.children.length > 0 && (
        <div>
          {node.children.map((child) => (
            <OrgTreeNode key={child.name} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};
//Renders the entire organizational tree starting from the root node
const OrgTree = ({ data }) => {
  return (
    <div className="m-4 p-4 border-2 border-gray-300 rounded-lg shadow-lg bg-gray-50">
      <OrgTreeNode node={data} />
    </div>
  );
};

export default OrgTree;
