import { PrimarySelect, PrimarySelectProp } from "components";

interface GroupChairmanSelectProps extends PrimarySelectProp {}
export const GroupChairmanSelect: React.FC<GroupChairmanSelectProps> = ({
  ...rest
}) => {
  return (
    <PrimarySelect
      label="Group Chairman"
      placeholder="Select chairman"
      {...rest}
    >
      <option value="rice">Adeyemi Bourdillon</option>
      <option value="tomato">Adamu Ednut</option>
      <option value="poultry">Alani Coker</option>
      <option value="poultry">Dele Powell</option>
      <option value="poultry">Ajayi Townsend</option>
    </PrimarySelect>
  );
};

// import { useEffect, useState } from "react";
// import { PrimarySelect, PrimarySelectProp } from "components";

// interface GroupChairmanSelectProps extends PrimarySelectProp {}

// export const GroupChairmanSelect: React.FC<GroupChairmanSelectProps> = ({
//   ...rest
// }) => {
//   const [farmers, setFarmers] = useState<string[]>([]);

//   useEffect(() => {
//     // Fetch the data from the other table on the dashboard and set it to the farmers state
//     const fetchData = async () => {
//       try {
//         // Make an API call or perform any necessary operations to get the list of farmers
//         const response = await fetch("/api/farmers");
//         const data = await response.json();
//         setFarmers(data); // Assuming data is an array of farmer names
//       } catch (error) {
//         console.error("Error fetching farmers:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <PrimarySelect
//       label="Group Chairman"
//       placeholder="Select chairman"
//       {...rest}
//     >
//       {farmers.map((farmer) => (
//         <option key={farmer} value={farmer}>
//           {farmer}
//         </option>
//       ))}
//     </PrimarySelect>
//   );
// };
