import React, { useMemo } from 'react'
import { useTable,useSortBy } from 'react-table'
import MOCK_DATA from "../MOCK_DATA.json"
import { COLUMNS ,GROUPED_COLUMNS} from "../Cmponents/Columns"
import "./Table.css"

const SortingTable = () => {
    const columns = useMemo(() => GROUPED_COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data },useSortBy)

    return (
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
           <th {...column.getHeaderProps(column.getSortByToggleProps())}>
             {// Render the header
             column.render('Header')}
             <span>{column.isSorted ?(column.isSortedDesc ?"D":"U"):""}</span>
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

    )

}

export default SortingTable


