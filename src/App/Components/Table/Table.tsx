import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'
import { transparentize } from 'polished'
import { useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { TableInstance } from 'react-table'
import NoData from '../NoData/NoData'
import * as T from './Table.styles'
interface TableProps<T extends Object>{
  
  instance: TableInstance<T>
  onPaginate?: (newPage: number)=> any
}

export default function Table<T extends Object> ({ 
  
  instance,
  onPaginate


}: TableProps<T>) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
    pageCount,
    gotoPage,
    state: {
      pageIndex,
    }
  } = instance

  useEffect(()=>{
    onPaginate &&
        onPaginate(pageIndex)
  }, [ pageIndex, onPaginate])

  return (
    <>
    <T.Wrapper cellPadding={0} cellSpacing={0} {...getTableProps()}>
      <T.Heading>
        {
          headerGroups.map(headerGroup => (
            <T.HeadingRow {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map(column => (
                  <T.HeadingCell {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </T.HeadingCell>
                ))
              }
            </T.HeadingRow>
          ))
        }
      </T.Heading>
      <T.Body {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return <T.BodyRow {...row.getRowProps()}>
              {
                row.cells.map(cell => {
                  return <T.BodyCell {...cell.getCellProps()}>
                    { cell.render('Cell') }
                  </T.BodyCell>
                })
              }
            </T.BodyRow>
          })
        }
      </T.Body>
    </T.Wrapper>

        {
          !rows.length && 
          <div style = {{ backgroundColor: transparentize(0.95 , '#274060')}}>
          <NoData height = {360} />
          </div>
        }

        <T.TablePagination>

        <ReactPaginate 
        pageCount={pageCount} 
        onPageChange={page=> gotoPage(page.selected)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        nextLabel={<Icon path={mdiChevronRight} size={'16px'} />}
        previousLabel={<Icon path={mdiChevronLeft} size={'16px'} />}
        />


          {/* <Button
          variant={'primary'}
          label={'Primeira Pagina'}
          onClick={()=> gotoPage(0)}
          disabled={!canPreviousPage}
          />

          <Button
          variant={'primary'}
          label={'Pagina anterior'}
          onClick={previousPage}
          disabled={!canPreviousPage}
          />

          <Button
          variant={'primary'}
          label={'Pr??xima pagina'}
          onClick={nextPage}
          disabled={!canNextPage}
          />

          <Button
          variant={'primary'}
          label={'Ultima pagina'}
          onClick={()=> gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          />

          <span>
            P??gina {pageIndex + 1} de {pageOptions.length}
          </span> */}

        </T.TablePagination>


      </>

  )
}