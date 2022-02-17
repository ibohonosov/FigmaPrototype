import { useState } from "react";
import classes from "./Players.module.css";
import TablePagination from "@mui/material/TablePagination";

const Players = ({ meta, ...props }) => {
  let pagesOptions = [1, 2, 3, 4, 5, 6, 7, 8];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={classes.background}>
      <h2>Players</h2>
      <div>
        <div className={classes.playersWrapp}>
          {props.players
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((p) => (
              <div className={classes.player}>
                <div className={classes.colo}>
                  {p.first_name.substr(0, 1)}
                  {p.last_name.substr(0, 1)}
                </div>
                <div className={classes.playerName}>
                  <div>{p.first_name}</div>
                  <div>{p.last_name}</div>
                </div>
              </div>
            ))}
        </div>
        <TablePagination
          rowsPerPageOptions={pagesOptions}
          component="div"
          count={props.totalPlayersCount}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default Players;
