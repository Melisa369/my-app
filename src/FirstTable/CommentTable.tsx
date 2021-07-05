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
import { useTranslation } from "react-i18next";



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




function CommentTable() {
  const data: any[] = [];

  const { t } = useTranslation();

  const columns: ExtendedTableColumnOptions[] = [
    {
      Header: `${t('first_name')}`,
      accessor: "firstName",
    },
    { Header: `${t('last_lame')}`,
     accessor: "lastName" },
    {
      Header: `${t('email')}`,
      accessor: "email",
    },
    {
      Header: `${t('comment')}`,
      accessor: "comment",
    },
    {
      Header: `${t('actions')}`,
      id: 'actions',
      Cell: () => 
        <div>
        <Button
        type="submit"
        fullWidth
        color="secondary"
        size="medium"
      >
          {t("delete")}
       </Button>
  
       <Button
       type="submit"
       fullWidth
       color="primary"
       size="medium"                      
       >
        {t("edit")}
      </Button>
      </div>
     
    },
  ];
  
  return <Table columns={columns} data={data} />;
}

export default CommentTable;
