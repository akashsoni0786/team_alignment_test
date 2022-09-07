import React from "react";
import "./App.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { contextname } from "./Context";

export default function List(props) {
  const contxt = React.useContext(contextname);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Album Id</TableCell>
            <TableCell align="right">Id </TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="center">URL</TableCell>
            <TableCell align="center">PThumbnail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{backgroundColor:props.backtab,borderColor:props.textclr,borderWidth:"2px",borderStyle:"solid"}}>
          {props.alldata.map((row) => {
            if (Number(props.listnumber) + 2 == row.id) {
              contxt.setRow2(row);
              return (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{color:props.textclr}}component="th" scope="row">
                    {row.albumId}
                  </TableCell>
                  <TableCell sx={{color:props.textclr}} component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell sx={{color:props.textclr}} align="left">{row.title}</TableCell>

                  <TableCell sx={{color:props.textclr}} align="center">
                    <img className="imgsoflist" alt="" src={row.url} />
                  </TableCell>
                  <TableCell sx={{color:props.textclr}} align="center">
                    <img className="imgsoflist" alt="" src={row.thumbnailUrl} />
                  </TableCell>
                </TableRow>
              );
            }
          })}

          {props.alldata.map((row) => {
            if (Number(props.listnumber) + 1 == row.id) {
              contxt.setRow1(row);
              return (
                <TableRow
                
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 }}}
                >
                  <TableCell sx={{color:props.textclr}} component="th" scope="row">
                    {row.albumId}
                  </TableCell>
                  <TableCell sx={{color:props.textclr}} component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell sx={{color:props.textclr}} align="left">{row.title}</TableCell>

                  <TableCell sx={{color:props.textclr}}align="center">
                    <img className="imgsoflist" alt="" src={row.url} />
                  </TableCell>
                  <TableCell sx={{color:props.textclr}} align="center">
                    <img className="imgsoflist" alt="" src={row.thumbnailUrl} />
                  </TableCell>
                </TableRow>
              );
            }
          })}

          {props.alldata.map((row) => {
            if (Number(props.listnumber) + 3 == row.id) {
              contxt.setRow3(row);
              return (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{color:props.textclr}} component="th" scope="row">
                    {row.albumId}
                  </TableCell>
                  <TableCell sx={{color:props.textclr}} component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell sx={{color:props.textclr}} align="left">{row.title}</TableCell>

                  <TableCell sx={{color:props.textclr}}align="center">
                    <img className="imgsoflist" alt="" src={row.url} />
                  </TableCell>
                  <TableCell sx={{color:props.textclr}} align="center">
                    <img className="imgsoflist" alt="" src={row.thumbnailUrl} />
                  </TableCell>
                </TableRow>
              );
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
