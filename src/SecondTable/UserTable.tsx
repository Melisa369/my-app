import React from "react";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import './Table1.css'
import { useTranslation } from "react-i18next";

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



function UserTable() {
  const data: any[] = [];

  const { t } = useTranslation();

  const columns: ExtendedTableColumnOptions[] = [

    {
      Header: `${t('first_name')}`,
      accessor: "firstName",
    },
    { Header: `${t('last_name')}`, 
      accessor: "lastName" },
    {
      Header: `${t('email')}`,
      accessor: "email",
    },
    {
      Header: `${t('actions')}`,
      id: 'actions',
      Cell: () => 
        <div>
      <Button
              type="submit"
              fullWidth
              color="primary"
              size="medium"
      
            >
             {t("activate")}
            </Button>
  
            <Button
              type="submit"
              fullWidth
              color="secondary"
              size="medium"   
            >
             {t("deactivate")}
            </Button>
          
             <Button
              href="/AddressCard"
              type="submit"
              fullWidth
              color="default"
              size="medium" 
            >
             {t("address")}
            </Button>
      </div>
    },
  ];

  return <Table columns={columns} data={data} />;
}

export default UserTable;