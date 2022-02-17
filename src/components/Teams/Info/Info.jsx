import React, { useState } from "react";
import classes from "./Info.module.css";
import TeamsForm from "./TeamsForm/TeamsForm";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TablePagination } from "@mui/material";

const Info = (props) => {

    let Count = props.totalTeamsCount

    let pagesOptions = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    let result = props.newTeam.concat(props.teams);
    if (result.length > 30) Count++

  return (
    <>
      <TeamsForm AddTeam={props.AddTeam}/>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className={classes.rowOne}>
              <TableCell>
                <span>Name</span>
              </TableCell>
              <TableCell>
                <span>City</span>
              </TableCell>
              <TableCell>
                <span>Abbreviation</span>
              </TableCell>
              <TableCell>
                <span>Conference</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((t) => (
                <TableRow key={t.name}>
                  <TableCell>{t.name}</TableCell>
                  <TableCell>{t.city}</TableCell>
                  <TableCell>{t.abbreviation}</TableCell>
                  <TableCell>
                    <p
                      className={
                        t.conference === "East" ? classes.green : classes.red
                      }
                    >
                      {t.conference}
                    </p>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
            rowsPerPageOptions={pagesOptions}
            component="div"
            count={Count}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      </>
  );
};

export default Info;
     