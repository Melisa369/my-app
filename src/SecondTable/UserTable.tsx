import React from "react";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import './Table1.css'

import { useTable } from "react-table";

import { ExtendedTableColumnOptions } from "../types/table";
import { Button, Container } from "@material-ui/core";
interface Props {
  columns: ExtendedTableColumnOptions[];
  data: any[];
}

const Table: React.FC<Props> = ({ columns, data }) => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <Container  className="container">
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableCell {...column.getHeaderProps()}>
                {column.render("Header")}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <TableRow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
    </Container>
  );
};

const columns: ExtendedTableColumnOptions[] = [
  {
    Header: "First Name",
    accessor: "firstName",
  },
  { Header: "Last Name", 
    accessor: "lastName" },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Actions",
    id: 'actions',
    Cell: () => 
      <div>
    <Button
            type="submit"
            fullWidth
            color="primary"
            size="medium"
    
          >
           Activate
          </Button>

          <Button
            type="submit"
            fullWidth
            color="secondary"
            size="medium"   
          >
           Deactivate
          </Button>
        
           <Button
            href="/AddressCard"
            type="submit"
            fullWidth
            color="default"
            size="medium" 
          >
           Address
          </Button>
    </div>
  },
];

function UserTable() {
  const data: any[] = [];

  return <Table columns={columns} data={data} />;
}

export default UserTable;