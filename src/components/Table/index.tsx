import { useTable } from "react-table";
import Paginator from "./Paginator";
import { Wrapper, StyledTable } from "./style";

interface TableProps {
  data: any[];
  columns: Array<any>;
  maxRowsPerPage?: number;
  hideHeaders?: boolean;
  handlePageChange?: any;
  currentPage: any;
}

export const Table = ({
  data,
  columns,
  maxRowsPerPage = 10, // Default to 10 rows per page
  hideHeaders = false, // Default to false
  currentPage,
  handlePageChange,
}: TableProps) => {
  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / maxRowsPerPage);

  // Calculate the paginated data for the current page
  const paginatedData = data.slice(
    (currentPage - 1) * maxRowsPerPage,
    currentPage * maxRowsPerPage
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({
      columns,
      data: paginatedData,
    });

  return (
    <Wrapper
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="lg"
    >
      <StyledTable {...getTableProps()}>
        {/* Only render thead if hideHeaders is false */}
        {!hideHeaders && (
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
        )}
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>

      <Paginator
        currentPage={currentPage}
        lastPage={totalPages}
        handlePageChange={handlePageChange}
        params={{ key: "value" }} // Optional parameters to pass
      />
    </Wrapper>
  );
};
