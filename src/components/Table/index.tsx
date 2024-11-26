import { useTable, TableOptions } from "react-table";
import { Flex } from "components/Flex";
import { Paginator } from "./Paginator";
import { StyledTable } from "./style";

interface TableProps<T extends object> {
  data: T[];
  columns: TableOptions<T>["columns"];
  maxRowsPerPage?: number;
  hideHeaders?: boolean;
  handlePageChange?: (page: number, params?: object) => void;
  currentPage: number;
}

export const Table = <T extends object>({
  data,
  columns,
  maxRowsPerPage = 10,
  hideHeaders = false,
  currentPage,
  handlePageChange,
}: TableProps<T>) => {
  const totalPages = Math.ceil(data.length / maxRowsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * maxRowsPerPage,
    currentPage * maxRowsPerPage
  );

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable<T>({
      columns,
      data: paginatedData,
    });

  return (
    <Flex
      width="100%"
      height="100%"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      p="lg"
    >
      <StyledTable {...getTableProps()}>
        {!hideHeaders && (
          <thead>
            {headerGroups.map((headerGroup) => {
              const { key, ...rest } = headerGroup.getHeaderGroupProps();
              return (
                <tr key={key} {...rest}>
                  {headerGroup.headers.map((column) => {
                    const { key: columnKey, ...columnProps } =
                      column.getHeaderProps();
                    return (
                      <th key={columnKey} {...columnProps}>
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
        )}
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const { key, ...rest } = row.getRowProps();
            return (
              <tr key={key} {...rest}>
                {row.cells.map((cell) => {
                  const { key: cellKey, ...cellProps } = cell.getCellProps();
                  return (
                    <td key={cellKey} {...cellProps}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
      <Paginator
        currentPage={currentPage}
        lastPage={totalPages}
        handlePageChange={(page, params) => handlePageChange?.(page, params)}
        params={{ key: "value" }}
      />
    </Flex>
  );
};
