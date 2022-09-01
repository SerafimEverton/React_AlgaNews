import { mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import { useMemo } from "react"
import { useTable, Column } from 'react-table'
import * as T from './Table.styles'

type Data = {
    preview: React.ReactNode
    col1: string
    col2: string
    actions: string
    
}

export default function Table () {
    const data = useMemo<Data[]>(
        
        () => [
            {
              col1: 'Hello',
              col2: 'World',
              actions: 'ações',
              preview: <Icon
              size= '14px'
              path={mdiOpenInNew}
              />
            },
            {
              col1: 'react-table',
              col2: 'rocks',
              actions: 'ações',
              preview: <Icon
              size= '14px'
              path={mdiOpenInNew}
              />
            },
            {
              col1: 'whatever',
              col2: 'you want',
              actions: 'ações',
              preview: <Icon
              size= '14px'
              path={mdiOpenInNew}
              />
            },
          ],
          []

    )

    const columns = useMemo<Column<Data>[]>(
        () => [
          {
            Header: '',
            accessor: 'preview', 
          },  
          {
            Header: 'Column 1',
            accessor: 'col1', 
          },
          {
            Header: 'Column 2',
            accessor: 'col2',
          },
          {
            Header: 'Ações',
            accessor: 'actions',
          },
        ],
        []
      )

      const tableInstance = useTable<Data>({ columns, data })

      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance

     
 return (
    
    <T.Wrapper cellPadding={0} cellSpacing={0} {...getTableProps()}>
      <T.Heading>
        {
        headerGroups.map(headerGroup => (
          
          <T.HeadingRow {...headerGroup.getHeaderGroupProps()}>
            {
            headerGroup.headers.map(column => (
             
              <T.HeadingCell {...column.getHeaderProps()}>
                {
                column.render('Header')}
              </T.HeadingCell>
            ))}
          </T.HeadingRow>
        ))}
      </T.Heading>
      
      <T.Body {...getTableBodyProps()}>
        {
        rows.map(row => {
          
          prepareRow(row)
          return (
            
            <T.BodyRow {...row.getRowProps()}>
              {
              row.cells.map(cell => {
                
                return (
                  <td {...cell.getCellProps()}>
                    {
                    cell.render('Cell')}
                  </td>
                )
              })}
            </T.BodyRow>
          )
        })}
      </T.Body>
    </T.Wrapper>
  )
}