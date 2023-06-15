import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
// import styled from "styled-components";
import styled from "@emotion/styled";

const rows = [
  {
    year: {
      e_year: 2008,
      e_type: "VS",
    },
    winnerParty: {
      party: "INC",
      voteshare: 34.0,
    },
    1: {
      id: "AEMP18694",
      name: "Brajraj Singh Chauhan",
      caste_category: "GEN",
      caste: "Rajput",
      party: "INC",
      voteshare: 34.0,
    },
    2: {
      id: "AEMP21204",
      name: "Durgalal Vijay",
      caste_category: "GEN",
      caste: "Baniya",
      party: "BJP",
      voteshare: 25.9,
    },
    3: {
      id: "AEMP23378",
      name: "Babu Jandel",
      caste_category: "OBC",
      caste: "Meena",
      party: "BSP",
      voteshare: 18.0,
    },
  },
  {
    year: {
      e_year: 2009,
      e_type: "LS",
    },
    winnerParty: {
      party: "INC",
      voteshare: 39.8,
    },
    1: {
      id: "AEMP14972",
      name: "Ramniwas Rawat",
      caste_category: "OBC",
      caste: "Rawat",
      party: "INC",
      voteshare: 39.8,
    },
    2: {
      id: "GEMP101232",
      name: "Narendra Singh Tomar",
      caste_category: "GEN",
      caste: "Rajput",
      party: "BJP",
      voteshare: 37.2,
    },
    3: {
      id: "GEMP5878",
      name: "Balveer Singh Dandotiya",
      caste_category: "GEN",
      caste: "Brahmin",
      party: "BSP",
      voteshare: 12.4,
    },
  },
  {
    year: {
      e_year: 2013,
      e_type: "VS",
    },
    winnerParty: {
      party: "BJP",
      voteshare: 41.2,
    },
    1: {
      id: "AEMP21204",
      name: "Durgalal Vijay",
      caste_category: "GEN",
      caste: "Baniya",
      party: "BJP",
      voteshare: 41.2,
    },
    2: {
      id: "AEMP23378",
      name: "Babu Jandel",
      caste_category: "OBC",
      caste: "Meena",
      party: "BSP",
      voteshare: 30.8,
    },
    3: {
      id: "AEMP21209",
      name: "BRAJRAJ SINGH",
      caste_category: "GEN",
      caste: "Thakur",
      party: "INC",
      voteshare: 22.0,
    },
  },
  {
    year: {
      e_year: 2014,
      e_type: "LS",
    },
    winnerParty: {
      party: "BJP",
      voteshare: 50.1,
    },
    1: {
      id: "AEMP26847",
      name: "Anoop Mishra",
      caste_category: "GEN",
      caste: "Brahmin",
      party: "BJP",
      voteshare: 50.1,
    },
    2: {
      id: "AEMP6413",
      name: "Dr. Govind Singh",
      caste_category: "GEN",
      caste: "Rajput",
      party: "INC",
      voteshare: 29.8,
    },
    3: {
      id: "GEMP5889",
      name: "Brindawan Singh Sikarwar",
      caste_category: "",
      caste: "",
      party: "BSP",
      voteshare: 13.8,
    },
  },
  {
    year: {
      e_year: 2018,
      e_type: "VS",
    },
    winnerParty: {
      party: "INC",
      voteshare: 55.2,
    },
    1: {
      id: "AEMP23378",
      name: "Babu Jandel",
      caste_category: "OBC",
      caste: "Meena",
      party: "INC",
      voteshare: 55.2,
    },
    2: {
      id: "AEMP81599",
      name: "DURGA LAL VIJAY (VAKIL)",
      caste_category: "GEN",
      caste: "Baniya",
      party: "BJP",
      voteshare: 31.8,
    },
    3: {
      id: "AEMP81598",
      name: "Tulsinarayan Meena",
      caste_category: "",
      caste: "",
      party: "BSP",
      voteshare: 8.1,
    },
  },
  {
    year: {
      e_year: 2019,
      e_type: "LS",
    },
    winnerParty: {
      party: "BJP",
      voteshare: 46.0,
    },
    1: {
      id: "GEMP101232",
      name: "Narendra Singh Tomar",
      caste_category: "GEN",
      caste: "Rajput",
      party: "BJP",
      voteshare: 46.0,
    },
    2: {
      id: "AEMP14972",
      name: "Ramniwas Rawat",
      caste_category: "OBC",
      caste: "Rawat",
      party: "INC",
      voteshare: 36.7,
    },
    3: {
      id: "GEMP101307",
      name: "Kartar Singh Bhandana",
      caste_category: "",
      caste: "Gurjar",
      party: "BSP",
      voteshare: 13.3,
    },
  },
];

const Heading = styled(Box)({
  marginTop: "1rem",
  marginBottom: "0.2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 0.4rem",
  width: "100%",
  gap: "1rem",
  overflowX: "scroll",
  "&::-webkit-scrollbar": {
    width: "0.3em",
    height: "0.1em",
  },
  "&::-webkit-scrollbar-track": {
    "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: "10px",
  },
});

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "year",
    label: "Year",
    show: true,
    width: "10%",
  },
  {
    id: "winning_party",
    label: "Winning Party (Margin)",
    show: true,
    width: "15%",
  },
  {
    id: "position1",
    label: "1st Position",
    show: true,
    width: "25%",
  },
  {
    id: "position2",
    label: "2nd Position",
    show: true,
    width: "25%",
  },
  {
    id: "position3",
    label: "3rd Position",
    show: true,
    width: "25%",
  },
];

const StyledTableHead = styled(TableHead)({
  background: "aliceblue",
  borderRadius: "10px",
  "& .header-text": {
    textTransform: "capitalize",
    whiteSpace: "break-spaces",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "130%",
    textAlign: "center",
    letterSpacing: "0.05em",
  },
  "& .MuiTableCell-root": {
    marginBottom: "1rem!important",
    padding: "0.4rem 1rem",
  },
});

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <StyledTableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"left"}
            className="columnHeading"
            sortDirection={orderBy === headCell.id ? order : false}
            width={headCell.width}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </StyledTableHead>
  );
}

const RowTypography = styled(Typography)({
  fontWeight: "400",
  fontSize: "14px",
  color: "#959595",
  letterSpacing: "0.5px",
});

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const StyledTableContainer = styled(TableContainer)({
  width: "100%",
  "&::-webkit-scrollbar": {
    height: "0.4em",
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0,0,0,.1)",
    borderRadius: "10px",
  },
});
const StyledTableCell = styled(TableCell)({
  fontFamily: "Poppins",
  fontStyle: "normal",
  left: 0,
  // color: color ? theme.palette.text[`${color}`] : theme.palette.text.dark,
  textAlign: "left",
  fontSize: "14px",
  fontWeight: 400,
  letterSpacing: "0.05em",
  lineHeight: "14px",
  paddingTop: "0.4rem",
  border: "none",
  zIndex: 1,
  "& span": {
    color: "aliceblue",
    fontWeight: "400",
  },
  "& .view-more": {
    fontFamily: "Poppins",
    fontStyle: "normal",
    letterSpacing: "0.05em",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "14px",
    color: "aliceblue",
    cursor: "pointer",
  },
  "& .caste": {
    display: "flex",
    alignItems: "center",
    "& .text": {
      minWidth: "120px",
    },
    "& .arrow-btn": {
      padding: "0",
      margin: "0",
      color: "aliceblue",
    },
  },

  "& .pipe": {
    color: "black",
    opacity: "0.3",
    fontSize: "14px",
  },
});

const CandidateName = styled(Typography)({
  color: "#ED6E52",
  fontWeight: "500 !important",
  fontFamily: "Poppins",
  fontStyle: "normal",
  letterSpacing: "0.05em",
  textTransform: "capitalize",
  fontSize: "14px",
  lineHeight: "14px",
});

const electionType = {
  LS: "Lok Sabha",
  VS: "Vidhan Sabha",
  "LS Bypolls": "LS Bypolls",
  "VS Bypolls": "VS Bypolls",
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  // eslint-disable-next-line
  const [row, setRow] = React.useState(rows);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // eslint-disable-next-line
  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  // eslint-disable-next-line
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  // eslint-disable-next-line
  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box
      sx={{
        width: "100%",
        margin: "1vh 0 5vh 0",
      }}
    >
      <Heading>Winning Party</Heading>
      <Paper
        sx={{
          width: "100%",
          mb: 2,
        }}
      >
        <StyledTableContainer
        // sx={{
        //   width: "80%",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
        >
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="small"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(row, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      onClick={(event) => handleClick(event, row.name)}
                      tabIndex={-1}
                      key={index}
                    >
                      <StyledTableCell
                        fontWeight="600"
                        fontFamily="Poppins"
                        fontStyle="normal"
                        color="#292929"
                        textAlign="left"
                        width="10%"
                      >
                        {row.year ? row.year.e_year : ""}
                        <br />
                        <RowTypography variant="h6" component="h6">
                          {electionType[row.year?.e_type]}
                        </RowTypography>
                      </StyledTableCell>
                      <StyledTableCell
                        fontWeight="600"
                        textAlign="left"
                        width="10%"
                      >
                        {row.winnerParty ? row.winnerParty.party : ""}
                        <br />
                        <RowTypography variant="h6" component="h6">
                          {`${
                            row.winnerParty
                              ? `${parseFloat(
                                  row.winnerParty.voteshare - row[2]?.voteshare
                                ).toFixed(2)}%`
                              : ""
                          }`}
                        </RowTypography>
                      </StyledTableCell>
                      <StyledTableCell
                        fontWeight="600"
                        textAlign="left"
                        width="25%"
                      >
                        {row[1] && (
                          <>
                            <RowTypography variant="h6" component="h6">
                              <CandidateName>{row[1].name}</CandidateName>
                              {` | ${row[1].caste_category ?? "-"} | ${
                                row[1].caste ?? "-"
                              }`}
                            </RowTypography>
                            {row[1].party}&nbsp;
                            {`| ${row[1].voteshare}%`}
                          </>
                        )}
                      </StyledTableCell>
                      <StyledTableCell
                        fontWeight="600"
                        textAlign="left"
                        width="25%"
                      >
                        {row[2] && (
                          <>
                            <RowTypography variant="h6" component="h6">
                              <CandidateName>{row[2].name}</CandidateName>
                              {` | ${row[2].caste_category ?? "-"} | ${
                                row[2].caste ?? "-"
                              }`}
                            </RowTypography>
                            {row[2].party}&nbsp;
                            {`| ${row[2].voteshare}%`}
                          </>
                        )}
                      </StyledTableCell>
                      <StyledTableCell
                        fontWeight="600"
                        textAlign="left"
                        width="25%"
                      >
                        {row[3] && (
                          <>
                            <RowTypography variant="h6" component="h6">
                              <CandidateName>{row[3].name}</CandidateName>
                              {` | ${row[3].caste_category ?? "-"} | ${
                                row[3].caste ?? "-"
                              }`}
                            </RowTypography>
                            {row[3].party}&nbsp;
                            {`| ${row[3].voteshare}%`}
                          </>
                        )}
                      </StyledTableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </StyledTableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
