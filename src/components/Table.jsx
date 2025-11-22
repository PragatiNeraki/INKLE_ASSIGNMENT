// import { useState, useMemo } from "react";
// import { FaEdit, FaChevronDown } from "react-icons/fa";
// import {
//   useReactTable,
//   getCoreRowModel,
//   getFilteredRowModel,
//   flexRender,
//   createColumnHelper
// } from "@tanstack/react-table";

// const Table = ({ data, onEdit }) => {
//   const columnHelper = createColumnHelper();
//   const [countryFilterOpen, setCountryFilterOpen] = useState(false);
//   const [selectedCountries, setSelectedCountries] = useState([]);

//   const uniqueCountries = useMemo(() => {
//     const countries = [...new Set(data.map(item => item.country).filter(Boolean))];
//     return countries.sort();
//   }, [data]);

//   const filteredData = useMemo(() => {
//     if (selectedCountries.length === 0) return data;
//     return data.filter(item => selectedCountries.includes(item.country));
//   }, [data, selectedCountries]);

//   const handleCountryToggle = (country) => {
//     setSelectedCountries(prev => 
//       prev.includes(country) 
//         ? prev.filter(c => c !== country)
//         : [...prev, country]
//     );
//   };

//   const columns = [
//     columnHelper.accessor("name", {
//       header: "Entity",
//       cell: ({ getValue }) => (
//         <span className="text-[#4A3AFF] font-medium text-[14px]">
//           {getValue()}
//         </span>
//       ),
//       size: 160
//     }),

//     columnHelper.accessor("gender", {
//       header: "Gender",
//       cell: ({ getValue }) => {
//         const gender = getValue();
//         const isFemale = gender?.toLowerCase() === "female";
//         return (
//           <span
//             className="rounded-full py-[4px] px-[10px] text-[12px] font-medium"
//             style={{
//               backgroundColor: isFemale ? "#EAF6FF" : "#FDE7E9",
//               color: isFemale ? "#53A3E0" : "#E46A76"
//             }}
//           >
//             {gender}
//           </span>
//         );
//       }
//     }),

//     columnHelper.accessor("createdAt", {
//       header: "Request date",
//       cell: ({ getValue }) => {
//         const raw = getValue();
//         const formatted = raw
//           ? new Date(raw).toLocaleDateString("en-US", {
//               month: "short",
//               day: "2-digit",
//               year: "numeric"
//             })
//           : "";
//         return <span className="text-[#111827] text-[14px]">{formatted}</span>;
//       }
//     }),

//     columnHelper.accessor("country", {
//       header: () => (
//         <div className="flex items-center gap-1 relative">
//           <span>Country</span>
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               setCountryFilterOpen(!countryFilterOpen);
//             }}
//             className="cursor-pointer p-1"
//             type="button"
//           >
//             <FaChevronDown 
//               className={`text-[#6F3FF5] transition-transform ${countryFilterOpen ? 'rotate-180' : ''}`}
//               size={10}
//             />
//           </button>
//           {countryFilterOpen && (
//             <>
//               <div 
//                 className="fixed inset-0 z-10" 
//                 onClick={() => setCountryFilterOpen(false)}
//               />
//               <div className="absolute top-full left-0 mt-1 bg-white border border-[#E5E5E5] rounded-[8px] shadow-lg z-20 min-w-[150px] py-1">
//                 {uniqueCountries.map(country => (
//                   <label
//                     key={country}
//                     className="flex items-center px-3 py-1.5 hover:bg-[#F7F4FF] cursor-pointer"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <input
//                       type="checkbox"
//                       checked={selectedCountries.includes(country)}
//                       onChange={() => handleCountryToggle(country)}
//                       className="mr-2 cursor-pointer w-4 h-4"
//                     />
//                     <span className="text-[14px] text-[#111827]">{country}</span>
//                   </label>
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       ),
//       cell: ({ getValue }) => (
//         <span className="text-[#111827] text-[14px] font-medium">
//           {getValue()}
//         </span>
//       )
//     }),

//     columnHelper.display({
//       id: "action",
//       header: "",
//       cell: ({ row }) => (
//         <button
//           onClick={(e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             onEdit(row.original);
//           }}
//           className="flex items-center justify-center cursor-pointer hover:scale-110 transition w-full h-full"
//           type="button"
//         >
//           <FaEdit className="text-[#6F3FF5]" size={18} />
//         </button>
//       ),
//       size: 40
//     })
    
//   ];

//   const table = useReactTable({
//     data: filteredData,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel()
//   });

//   return (
//     <div className="w-full flex justify-center">
//       <div className="w-full max-w-[760px] border border-[#E5E5E5] rounded-[10px] overflow-x-auto">
//         <table className="w-full">
//           <thead>
//             {table.getHeaderGroups().map(headerGroup => (
//               <tr key={headerGroup.id}>
//                 {headerGroup.headers.map(header => (
//                   <th
//                     key={header.id}
//                     className="text-left h-[56px] px-[16px] text-[14px] font-medium text-[#6B6B6B]"
//                   >
//                     {flexRender(header.column.columnDef.header, header.getContext())}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>

//           <tbody>
//             {table.getRowModel().rows.map(row => (
//               <tr key={row.id} className="h-[56px] hover:bg-[#F7F4FF] transition">
//                 {row.getVisibleCells().map(cell => (
//                   <td key={cell.id} className="px-[16px] whitespace-nowrap text-[14px] font-normal">
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Table;
import { useState, useMemo } from "react";
import { FaEdit, FaFilter, FaRegEdit } from "react-icons/fa";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
  createColumnHelper
} from "@tanstack/react-table";

const Table = ({ data, onEdit }) => {
  const columnHelper = createColumnHelper();
  const [countryFilterOpen, setCountryFilterOpen] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const uniqueCountries = useMemo(() => {
    const countries = [...new Set(data.map(item => item.country).filter(Boolean))];
    return countries.sort();
  }, [data]);

  const filteredData = useMemo(() => {
    if (selectedCountries.length === 0) return data;
    return data.filter(item => selectedCountries.includes(item.country));
  }, [data, selectedCountries]);

  const handleCountryToggle = (country) => {
    setSelectedCountries(prev => {
      const updated = prev.includes(country)
        ? prev.filter(c => c !== country)
        : [...prev, country];
      setCountryFilterOpen(false);
      return updated;
    });
  };

  const columns = [
    columnHelper.accessor("name", {
      header: "Entity",
      cell: ({ getValue }) => (
        <span className="text-[#4A3AFF] font-medium text-[14px]">
          {getValue()}
        </span>
      ),
      size: 160
    }),

    columnHelper.accessor("gender", {
      header: "Gender",
      cell: ({ getValue }) => {
        const gender = getValue();
        const isFemale = gender?.toLowerCase() === "female";
        return (
          <span
            className="rounded-full py-[4px] px-[10px] text-[12px] font-medium"
            style={{
              backgroundColor: isFemale ? "#EAF6FF" : "#FDE7E9",
              color: isFemale ? "#53A3E0" : "#E46A76"
            }}
          >
            {gender}
          </span>
        );
      }
    }),

    columnHelper.accessor("createdAt", {
      header: "Request date",
      cell: ({ getValue }) => {
        const raw = getValue();
        const formatted = raw
          ? new Date(raw).toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric"
            })
          : "";
        return <span className="text-[#111827] text-[14px]">{formatted}</span>;
      }
    }),

    columnHelper.accessor("country", {
      header: () => (
        <div className="flex items-center justify-between relative w-full">
          <span>Country</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCountryFilterOpen(!countryFilterOpen);
            }}
            className="cursor-pointer flex items-center"
            type="button"
            style={{
              border: 'none',
              background: 'transparent',
              padding: 0,
              outline: 'none'
            }}
          >
            <FaFilter
              className="text-[#6F3FF5]"
              size={12}
            />
          </button>

          {countryFilterOpen && (
            <>
              <div 
                className="fixed inset-0 z-[9998]" 
                onClick={() => setCountryFilterOpen(false)}
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
              />
              <div 
                className="absolute right-0 bg-white border border-[#E5E5E5] rounded-[8px] shadow-lg z-[9999]"
                style={{
                  top: 'calc(100% + 12px)',
                  width: '180px',
                  maxHeight: '132px',
                  overflowY: 'auto',
                  overflowX: 'hidden',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div style={{ padding: '4px 0' }}>
                  {uniqueCountries.map(country => (
                    <label
                      key={country}
                      className="flex items-center cursor-pointer transition-colors"
                      style={{
                        padding: '10px 16px',
                        backgroundColor: 'transparent'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCountryToggle(country);
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#F7F4FF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedCountries.includes(country)}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleCountryToggle(country);
                        }}
                        className="cursor-pointer"
                        style={{
                          width: '16px',
                          height: '16px',
                          marginRight: '12px',
                          accentColor: '#6F3FF5',
                          flexShrink: 0
                        }}
                      />
                      <span 
                        className="text-[#111827] font-normal"
                        style={{
                          fontSize: '14px',
                          fontFamily: 'Inter, sans-serif',
                          lineHeight: '20px'
                        }}
                      >
                        {country}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      ),
      cell: ({ getValue }) => (
        <span className="text-[#111827] text-[14px] font-medium">
          {getValue()}
        </span>
      ),
      size: 120
    }),

    columnHelper.display({
      id: "action",
      header: "",
      cell: ({ row }) => (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onEdit(row.original);
          }}
          className="flex items-center justify-center cursor-pointer transition hover:scale-110"
          type="button"
          style={{
            border: 'none',
            background: 'transparent',
            outline: 'none',
            padding: 0
          }}
        >
          <FaRegEdit 
            style={{ 
              color: '#6B6B6B'
            }} 
            size={14} 
          />
        </button>
      ),
      size: 40
    })
  ];

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  });

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[760px] border border-[#E5E5E5] rounded-[10px] overflow-x-auto">
        <table className="w-full" style={{ borderCollapse: 'collapse' }}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <th
                    key={header.id}
                    className="text-left h-[56px] px-[16px] text-[14px] font-medium text-[#6B6B6B]"
                    style={{
                      borderRight: index < headerGroup.headers.length - 1 ? '1px solid #E5E5E5' : 'none',
                      borderBottom: '1px solid #E5E5E5'
                    }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <tr key={row.id} className="h-[56px] hover:bg-[#F7F4FF] transition">
                {row.getVisibleCells().map((cell, cellIndex) => (
                  <td 
                    key={cell.id} 
                    className="px-[16px] whitespace-nowrap text-[14px] font-normal"
                    style={{
                      borderRight: cellIndex < row.getVisibleCells().length - 1 ? '1px solid #E5E5E5' : 'none',
                      borderBottom: rowIndex < table.getRowModel().rows.length - 1 ? '1px solid #E5E5E5' : 'none'
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
