import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { contextname } from "./Context";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Album(props) {
  const contxt = React.useContext(contextname);
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 700, backgroundColor: props.backtab }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: props.textclr }}>
            <StyledTableCell sx={{ color: props.backtab }}>
              Album Id
            </StyledTableCell>
            <StyledTableCell sx={{ color: props.backtab }}>Id</StyledTableCell>
            <StyledTableCell sx={{ color: props.backtab }} align="left">
              Title
            </StyledTableCell>
            <StyledTableCell sx={{ color: props.backtab }} align="center">
              Thumbnail
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={contxt.row1.id}>
            <StyledTableCell
              sx={{ color: props.textclr }}
              component="th"
              scope="row"
            >
              {contxt.row1.albumId}
            </StyledTableCell>
            <StyledTableCell
              sx={{ color: props.textclr }}
              component="th"
              scope="row"
            >
              {contxt.row1.id}
            </StyledTableCell>
            <StyledTableCell sx={{ color: props.textclr }} align="left">
              {contxt.row1.title}
            </StyledTableCell>
            <StyledTableCell align="center">
              <img
                style={{ height: "50px", width: "50px" }}
                alt=""
                src={contxt.row1.thumbnailUrl}
              />
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow key={contxt.row2.id}>
            <StyledTableCell
              sx={{ color: props.textclr }}
              component="th"
              scope="row"
            >
              {contxt.row2.albumId}
            </StyledTableCell>
            <StyledTableCell
              sx={{ color: props.textclr }}
              component="th"
              scope="row"
            >
              {contxt.row2.id}
            </StyledTableCell>
            <StyledTableCell sx={{ color: props.textclr }} align="left">
              {contxt.row2.title}
            </StyledTableCell>
            <StyledTableCell align="center">
              <img
                style={{ height: "50px", width: "50px" }}
                alt=""
                src={contxt.row2.thumbnailUrl}
              />
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow key={contxt.row3.id}>
            <StyledTableCell
              sx={{ color: props.textclr }}
              component="th"
              scope="row"
            >
              {contxt.row3.albumId}
            </StyledTableCell>
            <StyledTableCell
              sx={{ color: props.textclr }}
              component="th"
              scope="row"
            >
              {contxt.row3.id}
            </StyledTableCell>
            <StyledTableCell sx={{ color: props.textclr }} align="left">
              {contxt.row3.title}
            </StyledTableCell>
            <StyledTableCell align="center">
              <img
                style={{ height: "50px", width: "50px" }}
                alt=""
                src={contxt.row3.thumbnailUrl}
              />
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
