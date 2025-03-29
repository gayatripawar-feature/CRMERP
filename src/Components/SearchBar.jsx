// import { useState } from "react";


// const SearchBar= () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [results, setResults] = useState([]);

//   const moduleData = [
//     { name: "Sales", path: "Home > Sales" },
//     { name: "Lost Visits", path: "Home > Sales > Lost Visits" },
//     { name: "Pending Followup", path: "Home > Sales > Lost Visits > Pending Followup" },
//     { name: "New Followup", path: "Home > Sales > Lost Visits > New Followup" },
//     { name: "Developer", path: "Home > Developer" },
//     { name: "Share Space", path: "Home > Developer > Share Space" },
//   ];

//   // Function to handle search
//   const handleSearch = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     if (query.trim() === "") {
//       setResults([]);
//     } else {
//       const filteredResults = moduleData.filter((module) =>
//         module.name.toLowerCase().includes(query.toLowerCase())
//       );
//       setResults(filteredResults);
//     }
//   };

//   return (
//     <div>
//       <SearchBar onSearch={handleSearch} /> {/* Using the SearchBar Component */}
      
//       {/* Display Search Results */}
//       {results.length > 0 && (
//         <ul className="list-group mt-2">
//           {results.map((item, index) => (
//             <li key={index} className="list-group-item">
//               {item.path}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
