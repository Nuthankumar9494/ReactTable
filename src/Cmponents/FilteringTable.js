import React, { useMemo } from 'react'
import { useTable ,useGlobalFilter} from 'react-table'
import MOCK_DATA from "../MOCK_DATA.json"
import { GROUPED_COLUMNS} from "../Cmponents/Columns"
import "./Table.css"
import GlobalFilter from './GlobalFilter'
const FilteringTable = () => {
    const columns = useMemo(() => GROUPED_COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    const tableInstance = useTable({ columns, data },useGlobalFilter)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = tableInstance
    const {globalFilter} =state
    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        // apply the table props
   <table {...getTableProps()}>
   <thead>
     {// Loop over the header rows
     headerGroups.map(headerGroup => (
       // Apply the header row props
       <tr {...headerGroup.getHeaderGroupProps()}>
         {// Loop over the headers in each row
         headerGroup.headers.map(column => (
           // Apply the header cell props
           <th {...column.getHeaderProps()}>
             {// Render the header
             column.render('Header')}
           </th>
         ))}
       </tr>
     ))}
   </thead>
   {/* Apply the table body props */}
   <tbody {...getTableBodyProps()}>
     {// Loop over the table rows
     rows.map(row => {
       // Prepare the row for display
       prepareRow(row)
       return (
         // Apply the row props
         <tr {...row.getRowProps()}>
           {// Loop over the rows cells
           row.cells.map(cell => {
             // Apply the cell props
             return (
               <td {...cell.getCellProps()}>
                 {// Render the cell contents
                 cell.render('Cell')}
               </td>
             )
           })}
         </tr>
       )
     })}
   </tbody>
 </table>
 </>
    )

}

export default FilteringTable


